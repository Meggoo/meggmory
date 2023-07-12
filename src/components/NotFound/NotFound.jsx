import { Link } from "wouter";
import useGlobalState from "../../hooks/useGlobalState.js";
import SCNotFound from "./NotFound.styled.jsx";

export default function NotFound() {
  const { theme } = useGlobalState();

  return (
    <SCNotFound className={theme}>
      <div className="content">
        <h1 className="h-l">404</h1>
        <p className="b-m">Not Found!</p>
        <Link to="/meggmory" className="underlined h-s">
          Home
        </Link>
      </div>
    </SCNotFound>
  );
}
