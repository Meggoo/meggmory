import useGlobalState from "../../hooks/useGlobalState.js";
import SCPartyCard from "./PartyCard.styled.jsx";

export default function PartyCard({ children }) {
  const { theme } = useGlobalState();

  return (
    <SCPartyCard className={theme}>
      <span className="background"></span>
      <div className="container">{children}</div>
    </SCPartyCard>
  );
}
