import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handle_resize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handle_resize);

    return () => window.removeEventListener("resize", handle_resize);
  }, []);

  return width;
}
