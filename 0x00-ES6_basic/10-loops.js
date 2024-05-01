export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const value of array) {
    const newValue = appendString + value;
    arr.push(newValue);
  }

  return arr;
}
