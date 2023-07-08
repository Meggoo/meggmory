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
    <SCSidebar className={isOpen ? "open" : ""}>
      <div className="sidebar-backdrop" onClick={close}></div>
      <div className="sidebar-content">
        <button className="sidebar-control" onClick={isOpen ? close : open}>
          {isOpen ? <IconX /> : <IconMenu2 />}
        </button>
        <div className="game-info">
          {state.isGaming ? (
            <div className="gaming">
              <p>Level: {state.level}</p>
              <p>Score: {state.score + state.levelScore}</p>
              <p>Best Score: {state.highestScore}</p>
              <button onClick={restart_level}>Restart Level</button>
            </div>
          ) : (
            <div>
              <p>Best Score: {state.highestScore}</p>
              {state.level && <Link to="/game">Back to Game</Link>}
            </div>
          )}
        </div>
        <div className="settings">
          {state.isGaming && <Link to="/">Home</Link>}
          <Link to={state.isGaming ? "/info" : "/"}>
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
