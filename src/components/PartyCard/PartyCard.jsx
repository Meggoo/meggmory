import SCPartyCard from "./PartyCard.styled.jsx";

export default function PartyCard({ children }) {
  return (
    <SCPartyCard>
      <span className="background"></span>
      <div className="container">{children}</div>
    </SCPartyCard>
  );
}
