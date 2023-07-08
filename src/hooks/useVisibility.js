import { useEffect, useState } from "react";

export default function useVisibility() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handle_focus(event) {
      const state = event.srcElement.visibilityState;

      setVisible(state === "visible");
    }

    document.addEventListener("visibilitychange", handle_focus);

    return () => document.removeEventListener("visibilitychange", handle_focus);
  }, []);
  return visible;
}
