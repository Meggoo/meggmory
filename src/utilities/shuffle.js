import same from "./same";

export default function shuffle(array) {
  const limit = 100;
  let count, shuffled;

  count = 0;
  do {
    shuffled = array.slice().sort(() => (Math.random() > 0.5 ? 1 : -1));
    count++;
  } while (same(array, shuffled, (a, b) => a.id === b.id) && count < limit);

  return shuffled;
}
