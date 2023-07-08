import { Link } from "wouter";
import SCHome from "./Home.styled.jsx";
import { useEffect } from "react";
import logo from "../../assets/logo.png";
import useGlobalState from "../../hooks/useGlobalState.js";

export default function Home() {
  const { reset } = useGlobalState();

  useEffect(() => {
    reset();
  }, []);

  return (
    <SCHome>
      <img src={logo} alt="company logo" />
      <p>Memories of Meggtasm</p>
      <Link href="/game">Start Game!</Link>
      <Link href="/info">Instructions</Link>
    </SCHome>
  );
}
