export default function appendToEachArrayValue(array, appendString) {
  for (let val of array) {
    let idx = array.indexOf(val);
    array[idx] = appendString + val;
  }

  return array;
}
