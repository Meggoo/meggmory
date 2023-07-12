import SCImage from "./Image.styled.jsx";

export default function Image({ source, name }) {
  return (
    <SCImage $source={source} className={`image ${name ? name : ""}`}>
      <span className="background"></span>
      <img src={source} />
    </SCImage>
  );
}
