#!/usr/bin/node
export default (set, array) => array.every((v) => set.has(v));