import SCCube from "./Cube.styled.jsx";
import c_1 from "../../assets/images/cube_assets/c_1.webp";
import c_2 from "../../assets/images/cube_assets/c_2.webp";
import c_3 from "../../assets/images/cube_assets/c_3.webp";
import c_4 from "../../assets/images/cube_assets/c_4.webp";
import c_5 from "../../assets/images/cube_assets/c_5.webp";
import c_6 from "../../assets/images/cube_assets/c_6.webp";
import Image from "../Image/Image.jsx";

const images = [
  { source: c_1, name: "front" },
  { source: c_2, name: "back" },
  { source: c_3, name: "left" },
  { source: c_4, name: "right" },
  { source: c_5, name: "top" },
  { source: c_6, name: "bottom" },
];

export default function Cube() {
  return (
    <SCCube>
      <div className="faces">
        {images.map((image) => (
          <Image key={image.name} source={image.source} name={image.name} />
        ))}
      </div>
    </SCCube>
  );
}
