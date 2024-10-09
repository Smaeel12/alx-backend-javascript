#!/usr/bin/node
export default (list, city, newGrades) => list.filter((v) => v.location === city)
  .map((v) => {
    for (const g of newGrades) {
      if (g.studentId === v.id) v.grade = g.grade; // eslint-disable-line no-param-reassign
    }
    if (v.grade === undefined) v.grade = 'N/A'; // eslint-disable-line no-param-reassign
    return v;
  });
