export default (length, position, value) => {
  try {
    const dataview = new DataView(new ArrayBuffer(length));
    dataview.setInt8(position, value);
    return dataview;
  } catch (err) {
    throw Error('Position outside range');
  }
};
