import { useState, useEffect } from "react";
import SCDialog from "./Dialog.styled";
import useGlobalState from "../../hooks/useGlobalState";

export default function Dialog({ children, shown, duration = 0.33 }) {
  const [hasContent, setHasContent] = useState(shown);
  const { theme } = useGlobalState();

  useEffect(() => {
    if (shown) return setHasContent(true);

    const timerId = setTimeout(() => setHasContent(false), 1000 * duration);

    return () => clearTimeout(timerId);
  }, [shown]);

  return (
    <SCDialog
      className={`${shown ? "shown" : "hidden"} ${theme}`}
      style={{ "--duration": `${duration}s` }}
    >
      <div className="backdrop"></div>
      <div className="dialog-container">{hasContent ? children : null}</div>
    </SCDialog>
  );
}
