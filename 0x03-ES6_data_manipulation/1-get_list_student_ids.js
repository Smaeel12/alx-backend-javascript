#!/usr/bin/node
export default (list) => ((Array.isArray(list)) ? list.map((v) => v.id) : []);
