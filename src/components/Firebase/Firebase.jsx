import { useRef, useEffect } from "react";
import useWindowWidth from "../../hooks/useWindowWidth.js";
import random from "../../utilities/random.js";
import SCFirebase from "./Firebase.styled.jsx";

export default function Firebase() {
  const width = useWindowWidth();
  const preRef = useRef(null);

  useEffect(() => {
    const contentWidth = ~~(width / 9.6);
    const contentHeight = 30;
    const size = contentWidth * contentHeight;
    const chars = [" ", ".", "u", "g", "e", "m", "U", "G", "E", "M"];
    const intensity = new Array(size + contentWidth + 1).fill(0);

    function fire(pre) {
      let text;

      text = "";
      for (let i = 0; i < 10; i++)
        intensity[
          random(0, contentWidth) + contentWidth * (contentHeight - 1)
        ] = ~~(contentWidth / 1.5);
      for (let i = 0; i < size; i++) {
        intensity[i] = ~~(
          (intensity[i] +
            intensity[i + 1] +
            intensity[i + contentWidth] +
            intensity[i + contentWidth + 1]) /
          4
        );
        text += chars[intensity[i] > 9 ? 9 : intensity[i]];
        if (i % contentWidth > contentWidth - 2) text += "\n";
      }
      pre.innerText = text;
    }

    const intervalId = setInterval(() => fire(preRef.current), 33);

    return () => clearInterval(intervalId);
  }, [width]);

  return <SCFirebase ref={preRef} aria-hidden="true"></SCFirebase>;
}
