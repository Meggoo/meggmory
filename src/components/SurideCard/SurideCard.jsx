import SCSurideCard from "./SurideCard.styled.jsx";

export default function SurideCard({ front, back, flip, flipped }) {
  return (
    <SCSurideCard className={flipped ? "flipped" : ""}>
      <div className="content">
        <div className="front" onClick={flip}>
          {front}
        </div>
        <div className="back">{back}</div>
      </div>
    </SCSurideCard>
  );
}
