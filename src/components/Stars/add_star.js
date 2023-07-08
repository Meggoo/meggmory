import random from "../../utilities/random";

export default function add_star(element) {
  const star = document.createElement("span");
  const top = random(0, 100);
  const left = random(0, 100);
  const delay = random(0, 1000);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  svg.setAttribute("viewBox", "0 0 24 24");
  path.setAttribute("d", "M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z");

  star.style.setProperty("--top", `${top}%`);
  star.style.setProperty("--left", `${left}%`);
  star.style.setProperty("--delay", `${delay}ms`);
  star.classList.add("star");

  star.addEventListener("animationend", () => element.removeChild(star), {
    once: true,
  });

  svg.appendChild(path);
  star.appendChild(svg);
  element.appendChild(star);
}
