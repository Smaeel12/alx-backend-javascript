#!/usr/bin/node
export default (arr) => Array.isArray(arr) ? arr.map(obj => obj.id) : []