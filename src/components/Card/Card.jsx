import { IconInfoCircleFilled, IconX } from "@tabler/icons-react";
import Image from "../Image/Image.jsx";
import SurideCard from "../SurideCard/SurideCard.jsx";
import { IconArrowsMaximize } from "@tabler/icons-react";

export default function Card({
  image,
  show_info,
  locked,
  unflip,
  pop_up,
  move,
  currentlyFlipped,
  isFlipping,
}) {
  return (
    <SurideCard
      front={
        <div className="card bordered">
          <button
            className="info control-button"
            data-id={image.id}
            onClick={show_info}
          >
            <IconInfoCircleFilled />
          </button>
          <button className="control-button" onClick={pop_up}>
            <IconArrowsMaximize />
          </button>
          <Image source={image.src} />
        </div>
      }
      back={
        <div className="card bordered">
          <button className="close control-button" onClick={unflip}>
            <IconX />
          </button>
          <div className="links">
            <a className="b-l underlined" href={image.source} target="_blank">
              source
            </a>
            <a className="b-l underlined" href={image.artist} target="_blank">
              artist
            </a>
          </div>
        </div>
      }
      flip={locked ? null : () => move(image.id)}
      flipped={isFlipping || currentlyFlipped === image.id}
    />
  );
}
