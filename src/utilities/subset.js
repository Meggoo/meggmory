import shuffle from "./shuffle";

export default function subset(array, length) {
  return shuffle(array).slice(0, length);
}
