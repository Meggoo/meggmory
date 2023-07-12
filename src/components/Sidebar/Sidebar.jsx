import { useState } from "react";
import SCSidebar from "./Sidebar.styled.jsx";
import useGlobalState from "../../hooks/useGlobalState.js";
import { Link } from "wouter";
import Toggle from "../Toggle/Toggle.jsx";
import {
  IconBulbFilled,
  IconBulbOff,
  IconX,
  IconMenu2,
} from "@tabler/icons-react";
import { useEffect } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const state = useGlobalState();

  function close() {
    setIsOpen(false);
  }

  function open() {
    setIsOpen(true);
  }

  function restart_level() {
    state.restart_level();
    setIsOpen(false);
  }

  useEffect(() => {
    setIsOpen(false);
  }, [state.isGaming]);

  return (
    <SCSidebar className={`${isOpen ? "open" : ""} ${state.theme}`}>
      <div className="sidebar-backdrop" onClick={close}></div>
      <div className="sidebar-content">
        <button
          className="sidebar-control control-button"
          onClick={isOpen ? close : open}
        >
          {isOpen ? <IconX /> : <IconMenu2 />}
        </button>
        <div className="game-info">
          {state.isGaming ? (
            <div className="details">
              <p className="b-m">Level: {state.level}</p>
              <p className="b-m">Score: {state.score + state.levelScore}</p>
              <p className="b-m">Best Score: {state.highestScore}</p>
              <button className="b-m" onClick={restart_level}>
                Restart Level
              </button>
            </div>
          ) : (
            <div className="details">
              <p className="b-m">Best Score: {state.highestScore}</p>
              {state.level && (
                <Link className="b-m" to="/meggmory/game">
                  Back to Game
                </Link>
              )}
            </div>
          )}
        </div>
        <div className="settings">
          {state.isGaming && (
            <Link className="h-s underlined" to="/meggmory">
              Home
            </Link>
          )}
          <Link
            className="h-s underlined"
            to={state.isGaming ? "/meggmory/info" : "/meggmory"}
          >
            {state.isGaming ? "Instructions" : "Home"}
          </Link>
          <Toggle
            icons={[<IconBulbFilled />, <IconBulbOff />]}
            choice={state.theme}
            options={state.themes}
            toggle={state.set_theme}
          />
        </div>
      </div>
    </SCSidebar>
  );
}
