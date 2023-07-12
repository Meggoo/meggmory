import { Link } from "wouter";
import SCHome from "./Home.styled.jsx";
import { useEffect } from "react";
import logo from "../../assets/logo.png";
import Firebase from "../../components/Firebase/Firebase.jsx";
import useGlobalState from "../../hooks/useGlobalState.js";

export default function Home() {
  const { reset, theme, themes } = useGlobalState();

  useEffect(() => {
    reset();
  }, []);

  return (
    <SCHome className={theme}>
      <Firebase />
      <div className="main-content glassified bordered">
        <div className="logo">
          <img src={logo} alt="company logo" />
          <p className="b-l">Memories of Meggtasm</p>
        </div>
        <Link className="h-m play-button" href="/game">
          Start Game!
        </Link>
        <Link className="b-l underlined" href="/info">
          Instructions
        </Link>
      </div>
    </SCHome>
  );
}
