import { create } from "zustand";
import shuffle from "../utilities/shuffle";
import subset from "../utilities/subset";
import load_images from "../utilities/load_images";
import data from "../data";

/**
 * What kind of state do I need to keep track of for the game?
 * I need to know if the assets are loading, also if there was
 * an error loading the elements. I need to keep track of the
 * level, and images.
 */

const useGameState = create((set) => ({
  level: null,
  score: 0,
  levelScore: 0,
  highestScore: null,
  images: [],
  checked: [],
  isLoading: false,
  isError: false,
  isFlipping: false,
  isGameOver: false,
  isNewighScore: false,

  reset_level: () =>
    set((state) => ({
      score: state.score - state.levelScore,
      images: shuffle(state.allImages),
      checked: [],
      isLoading: false,
      isError: false,
      isFlipping: false,
      isGameOver: false,
      isNewighScore: false,
    })),

  move: async (state, id) => {
    set(() => ({ isFlipping: true }));

    if (!~-state.checked.length) {
      /**
       * need to check that there are images left for the levels
       */

      const images = subset(data, state.level + 2);

      console.log("loading next level!");
      console.log(images);

      try {
        await load_images(images);

        set((state) => ({
          level: state.level + 1,
          score: state.score + state.levelScore,
          levelScore: 0,
          images,
          checked: [],
          isLoading: false,
          // isNewighScore: false,
        }));

        setTimeout(() => set({ isFlipping: false }), 1000);

        // setTimeout(
        //   () =>
        //     set((state) => ({
        //       level: state.level + 1,
        //       score: state.score + state.levelScore,
        //       levelScore: 0,
        //       images,
        //       checked: [],
        //       isLoading: false,
        //       isFlipping: false,
        //       isNewighScore: false,
        //     })),
        //   1000
        // );
      } catch (error) {
        console.log(error);
        set({ isloading: false, isError: true });
      }
    } else {
      if (state.checked.some((image) => image.id === id)) {
        const currentScore = state.score + state.levelScore;
        let isNewighScore, highestScore;

        console.log("game over!");

        if (currentScore > state.highestScore) {
          localStorage.setItem("_meggest_score_", JSON.stringify(currentScore));
          isNewighScore = true;
          highestScore = currentScore;
        } else {
          isNewighScore = false;
          highestScore = state.highestScore;
        }

        set({
          highestScore,
          isNewighScore,
          isGameOver: true,
        });
      } else {
        // const images = shuffle(state.images);
        // const image = state.images.find((image) => image.id === id);
        // const checked = [image, ...state.checked];
        // const levelScore = state.levelScore + 1;

        // setTimeout(
        //   () => set({ images, checked, levelScore, isFlipping: false }),
        //   300
        // );

        setTimeout(
          () =>
            set((state) => {
              const images = shuffle(state.images);
              const image = images.find((image) => image.id === id);
              const checked = [image, ...state.checked];
              const levelScore = state.levelScore + 1;
              const isFlipping = false;

              return { images, checked, levelScore, isFlipping };
            }),
          330
        );
      }
    }
  },

  init: async () => {
    const images = subset(data, 2);
    const sources = images.map((image) => image.src);

    set(() => ({ isLoading: true }));

    try {
      let highestScore;

      highestScore = localStorage.getItem("_meggest_score_");

      if (!highestScore) {
        localStorage.setItem("_meggest_score_", "0");
        highestScore = 0;
      } else highestScore = JSON.parse(highestScore);

      await load_images(sources);

      set(() => ({
        level: 1,
        score: 0,
        levelScore: 0,
        highestScore,
        images,
        checked: [],
        isLoading: false,
        isError: false,
        isFlipping: false,
        isGameOver: false,
        isNewighScore: false,
      }));
    } catch (error) {
      console.log(error);

      set(() => ({ isLoading: false, isError: true }));
    }
  },
  flip: () => set((state) => ({ isFlipping: !state.isFlipping })),
  clear_store: () =>
    set(() => ({
      level: null,
      score: 0,
      levelScore: 0,
      images: [],
      checked: [],
      isLoading: false,
      isError: false,
      isFlipping: false,
      isGameOver: false,
      isNewighScore: false,
    })),
}));

export default useGameState;
