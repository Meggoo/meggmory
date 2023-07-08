import { useState, useEffect } from "react";
import { Link } from "wouter";
import SurideCard from "../../components/SurideCard/SurideCard.jsx";
import SCGame from "./Game.styled.jsx";
import Dialog from "../../components/Dialog/Dialog.jsx";
import useGlobalState from "../../hooks/useGlobalState.js";
import data from "../../data.js";
import subset from "../../utilities/subset.js";
import shuffle from "../../utilities/shuffle.js";
import PartyCard from "../../components/PartyCard/PartyCard.jsx";
import Stars from "../../components/Stars/Stars.jsx";

export default function Game() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [levelScore, setLevelScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [images, setImages] = useState([]);
  const [checked, setChecked] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);
  const [error, setError] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [newHighScore, setNewHighScore] = useState(false);
  const [noMoreImages, setNoMoreImages] = useState(false);
  const state = useGlobalState();
  const title = noMoreImages
    ? "You Beat the Game!"
    : newHighScore
    ? "New High Score!"
    : "Game Over!";
  const message = noMoreImages
    ? "Congratulations, you've reached the highest possible score!"
    : newHighScore
    ? `You've reached a new high score of ${highestScore}`
    : `score: ${score}`;
  const Content = (
    <div>
      <h1>{title}</h1>
      {newHighScore && !noMoreImages ? (
        <Stars totalStars={5}>
          <p>{message}</p>
        </Stars>
      ) : (
        <p>{message}</p>
      )}
      <Link to="/">Home</Link>
      <button onClick={reset_game}>Play Again!</button>
    </div>
  );

  async function load_images(n) {
    const images = subset(data, n);
    const sources = images.map((image) => image.src);
    const promises = sources.map(
      (src) =>
        new Promise((resolve, reject) => {
          const img = document.createElement("img");

          img.src = src;

          img.addEventListener("load", () => resolve());

          img.addEventListener("error", () =>
            reject({ message: "image failed to load!" })
          );
        })
    );

    await Promise.all(promises);

    return images;
  }

  async function reset_game() {
    setGameOver(false);
    setNewHighScore(false);
    setNoMoreImages(false);

    await load_level(1);
  }

  function restart_level() {
    console.log("images:");
    console.log(images);

    const shuffled = shuffle(images);

    console.log("shuffled:");
    console.log(shuffled);

    setIsFlipping(true);
    setIsLoading(true);
    setLevelScore(0);
    setImages(shuffled);
    setChecked([]);

    setTimeout(() => {
      setIsFlipping(false);
      setIsLoading(false);
    }, 330);

    state.set_images(shuffled);
    state.set_checked([]);
    state.set_level_score(0);
  }

  async function load_level(n) {
    setIsLoading(true);

    try {
      const images = await load_images(n + 1);
      const newScore = !~-n ? 0 : score + levelScore + 1;

      setLevel(n);
      setScore(newScore);
      setLevelScore(0);
      setChecked([]);
      setError(false);

      setTimeout(() => setImages(images), 330);

      setTimeout(() => {
        setIsLoading(false);
        setIsFlipping(false);
      }, 500);

      state.set_level(n);
      state.set_score(newScore);
      state.set_level_score(0);
      state.set_images(images);
      state.set_checked([]);
    } catch (error) {
      console.log(error);
      setError(true);
      setIsLoading(false);
    }
  }

  function retry() {
    setError(false);
    setIsLoading(true);

    setTimeout(() => load_level(level + 1), 330);
  }

  async function move(id) {
    const isLast = !~-(images.length - checked.length);
    const isCorrect = !checked.some((other) => other.id === id);

    setIsFlipping(true);

    if (isLast && isCorrect) {
      if (images.length === data.length) {
        setNoMoreImages(true);
        setGameOver(true);

        if (score > highestScore) {
          const highestScore = data.length;

          localStorage.setItem("_meggest_score_", JSON.stringify(highestScore));

          setHighestScore(highestScore);
          state.set_highest_score(highestScore);
        }
        state.reset();
      } else {
        load_level(level + 1);
      }
    } else {
      if (!isCorrect) {
        const newScore = score + levelScore;

        if (newScore > highestScore) {
          localStorage.setItem("_meggest_score_", JSON.stringify(newScore));

          setHighestScore(newScore);
          setNewHighScore(true);
          state.set_highest_score(newScore);
        }

        setGameOver(true);
        setScore(newScore);

        state.set_score(newScore);
        state.reset();
      } else {
        const shuffled = shuffle(images);
        const image = images.find((image) => image.id === id);
        const newChecked = [image, ...checked];

        setLevelScore((prev) => prev + 1);
        setChecked(newChecked);

        setTimeout(() => setImages(shuffled), 330);

        setTimeout(() => setIsFlipping(false), 500);

        state.set_images(shuffled);
        state.set_checked(newChecked);
        state.set_level_score(levelScore + 1);
      }
    }
  }

  useEffect(() => {
    if (state.level) {
      setLevel(state.level);
      setScore(state.score);
      setLevelScore(state.levelScore);
      setHighestScore(state.highestScore);
      setImages(state.images);
      setChecked(state.checked);
      setIsLoading(false);
    } else {
      load_level(1);
    }
  }, []);

  useEffect(() => {
    state.restart_level = restart_level;
    setHighestScore(state.highestScore);
  }, [restart_level]);

  useEffect(() => {
    state.set_gaming_state(true);
  }, []);

  return (
    <SCGame>
      <div className="cards">
        {images.map((image, index) => (
          <SurideCard
            key={index}
            front={<img src={image.src} />}
            back={<p>by me</p>}
            flip={() => move(image.id)}
            flipped={isFlipping}
          />
        ))}
      </div>
      <Dialog shown={isLoading}>
        <div className="loading">Loading...</div>
      </Dialog>
      <Dialog shown={error}>
        <div className="error">
          <p>Error</p>
          <button onClick={retry}>Try Again!</button>
        </div>
      </Dialog>
      <Dialog shown={gameOver}>
        {noMoreImages ? (
          <Stars totalStars={5}>
            <PartyCard>{Content}</PartyCard>
          </Stars>
        ) : (
          <div>{Content}</div>
        )}
      </Dialog>
    </SCGame>
  );
}
