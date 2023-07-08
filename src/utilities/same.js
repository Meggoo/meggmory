export default function same(arr1, arr2, cond) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++)
    if (!cond(arr1[i], arr2[i])) return false;
  return true;
}
