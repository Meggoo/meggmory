import { useState, useEffect } from "react";
import { IconX } from "@tabler/icons-react";
import SCGallery from "./Gallery.styled.jsx";

export default function Gallery({ Component, props, images, timing = 0.33 }) {
  const [currentThing, setCurrentThing] = useState({
    index: 0,
    src: null,
    top: 0,
    left: 0,
    initialWidth: 0,
    initialHeight: 0,
    finalWidth: 0,
    finalHeight: 0,
  });
  const [isOpen, setIsOpen] = useState(false);

  function get_coords(index) {
    const ancestor = document.querySelector(`[data-gallery-id="${index}"]`);
    const image = ancestor.querySelector("img");
    const rect = image.getBoundingClientRect();
    const top = rect.top;
    const left = rect.left;

    return { top, left };
  }

  function pop_out() {
    const { top, left } = get_coords(currentThing.index);

    setCurrentThing((prev) => ({ ...prev, top, left }));
    setIsOpen(false);

    setTimeout(
      () =>
        setCurrentThing({
          index: 0,
          src: null,
          top: 0,
          left: 0,
          initialWidth: 0,
          initialHeight: 0,
          finalWidth: 0,
          finalHeight: 0,
        }),
      timing * 1000
    );
  }

  function pop_up(event) {
    event.stopPropagation();

    const ancestor = event.target.closest(".image-card");
    const image = ancestor.querySelector("img");
    const rect = image.getBoundingClientRect();
    const measure = document.createElement("img");

    measure.src = image.src;

    measure.addEventListener("load", (event) => {
      const target = event.target;

      setCurrentThing({
        index: ancestor.dataset.galleryId,
        src: image.src,
        top: rect.top,
        left: rect.left,
        initialWidth: rect.width,
        initialHeight: rect.height,
        finalWidth: target.width,
        finalHeight: target.height,
      });
      setIsOpen(true);
    });
  }

  useEffect(() => {
    function reposition() {
      if (!isOpen) return;

      const { top, left } = get_coords(currentThing.index);

      setCurrentThing((prev) => ({ ...prev, top, left }));
    }

    window.addEventListener("scroll", reposition);

    return () => window.removeEventListener("scroll", reposition);
  }, [currentThing]);

  return (
    <SCGallery style={{ "--timing": `${timing}s` }}>
      {images.map((image, index) => (
        <div className="image-card" key={index} data-gallery-id={image.id}>
          <Component {...props} image={image} pop_up={pop_up} />
        </div>
      ))}
      <button
        className={`close-button control-button ${isOpen ? "open" : ""}`}
        onClick={pop_out}
      >
        <IconX />
      </button>
      <div className={`backdrop ${isOpen ? "open" : ""}`}></div>
      <img
        src={currentThing.src}
        className={`popup-image ${isOpen ? "open" : "closed"}`}
        style={{
          "--top": `${currentThing.top}px`,
          "--left": `${currentThing.left}px`,
          "--initial-width": `${currentThing.initialWidth}px`,
          "--initial-height": `${currentThing.initialHeight}px`,
          "--final-width": `${currentThing.finalWidth}px`,
          "--final-height": `${currentThing.finalHeight}px`,
        }}
        alt="by me"
      />
    </SCGallery>
  );
}
