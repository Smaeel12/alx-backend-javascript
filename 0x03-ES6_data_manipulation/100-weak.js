#!/usr/bin/node
const weakMap = new WeakMap();
function queryAPI(endpoint) {
  const count = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, count + 1);
  if (weakMap.get(endpoint) >= 5) throw Error('Endpoint load is high');
}
export { weakMap, queryAPI };
