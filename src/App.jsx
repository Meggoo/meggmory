import { Route, Switch } from "wouter";
import { useEffect } from "react";
import Home from "./pages/Home/Home";
import Info from "./pages/Info/Info";
import NotFound from "./components/NotFound/NotFound";
import SCApp from "./App.styled";
import Game from "./pages/Game/Game";
import Sidebar from "./components/Sidebar/Sidebar";
import useGlobalState from "./hooks/useGlobalState";
import "./style.css";

function App() {
  const state = useGlobalState();

  useEffect(() => {
    function load_theme() {
      let theme = localStorage.getItem("_megg_theme_");

      if (!theme) {
        theme = "dark";
        localStorage.setItem("_megg_theme_", theme);
      }

      state.set_theme(theme);
    }

    if (!state.level) load_theme();
  }, []);

  useEffect(() => {
    let highestScore;

    highestScore = localStorage.getItem("_meggest_score_");

    if (highestScore) highestScore = JSON.parse(highestScore);
    else {
      highestScore = 0;
      localStorage.setItem("_meggest_score_", JSON.stringify(highestScore));
    }

    state.set_highest_score(highestScore);
  }, []);

  return (
    <SCApp className={state.theme}>
      <Switch>
        <Route path="/meggmory">
          <Home />
        </Route>
        <Route path="/meggmory/game">
          <div>
            <Game />
            <Sidebar />
          </div>
        </Route>
        <Route path="/meggmory/info">
          <div>
            <Info />
            <Sidebar />
          </div>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </SCApp>
  );
}

export default App;
