#!/usr/bin/node
export default (length, position, value) => {
  if (position >= length) throw Error('Position outside range');
  const dataview = new DataView(new ArrayBuffer(length));
  dataview.setInt8(position, value);
  return dataview;
};
