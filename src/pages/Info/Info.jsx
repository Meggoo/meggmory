import { useEffect } from "react";
import ui_01 from "../../assets/images/ui/ui_01.jpg";
import ui_02 from "../../assets/images/ui/ui_02.jpg";
import ui_03 from "../../assets/images/ui/ui_03.jpg";
import ui_04 from "../../assets/images/ui/ui_04.jpg";
import mobile from "../../assets/images/ui/mobile.png";

import SCInfo from "./Info.styled.jsx";
import useGlobalState from "../../hooks/useGlobalState.js";

export default function Info() {
  const state = useGlobalState();

  useEffect(() => {
    state.set_gaming_state(false);
  }, []);

  return (
    <SCInfo className={state.theme}>
      <h2 className="h-m">How to Play</h2>
      <p className="b-m">
        The goal of the game is to click on each card only once. When you click
        on a card, all the cards are reshuffled. Once you've clicked all cards
        on a level the next level is loaded. If there are no more cards, you've
        cleared the game, and are entitled to a date with Megu, this offer is
        redeemable at your nearest 甘兎庵 establishment.
      </p>
      <h2 className="h-m">User Interface</h2>
      <p className="b-m">
        Each card has two buttons, one for expanding the image, and one for
        checking out the sources. Clicking those buttons doesn't trigger a move
        event, neither does clicking anything on the back of the card.
      </p>
      <img src={ui_01} alt="ui overview" />
      <p className="b-m">
        The expand button displays the full sized image. The pop up image is
        closed by clicking the button at the top left corner on desktop, and
        bottom right corner on mobile.
      </p>
      <img src={ui_02} alt="close button on desktop" />
      <p className="b-m">mobile version :</p>
      <img src={ui_03} alt="close button on mobile" />
      <p className="b-m">
        The sidebar is opened by clicking the button at the top right corner on
        desktop and bottom right on mobile
      </p>
      <img src={ui_04} alt="sidebar" />
      <p className="b-m">
        If you came to this page from a game, you'll notice a "Back to Game"
        button on the sidebar, this button allows you to return to the game you
        were in before. Please notice that state is preserved when coming to
        this page, so whatever moves you made on the game before coming here
        will be part of the state of the game if you decide to go back. You can
        reset the level if you wish.
      </p>
      <h2 className="h-m">How to Beat the Game</h2>
      <p className="b-m">
        Beating the game is relative easy with some practice. You can use
        mnemonic techniques like the{" "}
        <a href="https://en.wikipedia.org/wiki/Method_of_loci" target="_blank">
          Method of loci
        </a>
        . If you are an absolute beginner it should take you about one or two
        weeks to get good enough to beat the game.
      </p>
      <h2 className="h-m">Installation</h2>
      <p className="b-m">
        You can install the app on mobile and desktop and play offline.
      </p>
      <img src={mobile} alt="install app on mobile" />
      <h2 className="h-m">Bug Reports</h2>
      <p className="b-m">
        If you find a bug you can report it on{" "}
        <a href="https://github.com/Meggoo/meggmory" target="_blank">
          the project's repo
        </a>
        , or on the{" "}
        <a href="https://4chan.org/a/goc" target="_blank">
          &gt;&gt;&gt;a thread
        </a>{" "}
        by namefagging as "bugger".
      </p>
    </SCInfo>
  );
}
