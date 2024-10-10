export default (set, startString) => {
  const arr = Array.from(set).filter((v) => v);
  const newArr = arr.filter((v) => v.startsWith(startString))
    .map((v) => v.substr(startString.length));
  return arr.every((v, i) => v === newArr[i]) ? '' : newArr.join('-');
};
