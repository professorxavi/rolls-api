export default function findInArray(arr, val) {
  return arr.find((e) => {
    if (e.value) {
      return e.value === val;
    }
    return e.min <= val && val <= e.max;
  });
}
