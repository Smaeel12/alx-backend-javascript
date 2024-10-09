#!/usr/bin/node
export default (groceriesMap) => {
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [item, quantity] of groceriesMap) {
    if (quantity === 1) {
      groceriesMap.set(item, 100);
    }
  }
};
