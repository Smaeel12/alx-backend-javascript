#!/usr/bin/node
export default (set, startString) => {
  if (!startString || !Array.from(set).some((v) => v.startsWith(startString))) return '';
  const strs = Array.from(set)
    .map((v) => (v ? v.slice(startString.length) : undefined))
    .filter((x) => x);
  return strs.join('-');
};
