#!/usr/bin/node
export default (map) => {
  if (!(map instanceof Map))
    throw Error('Cannot process')
  map.forEach((k, v) => { if (k === 1) map.set(v, 100) })
}