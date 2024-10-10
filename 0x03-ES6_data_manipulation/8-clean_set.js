export default (set, startString) => {
  const newSet = Array.from(set)
    .filter((v) => v.startsWith(startString))
    .map((v) => v.substr(startString.length));
  return Array.from(set).every((v, i) => v === newSet[i]) ? '' : newSet.join('-');
};
