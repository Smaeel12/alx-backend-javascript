#!/usr/bin/node
export default (list) => list.reduce((acc, v) => acc + v.id, 0)