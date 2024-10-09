#!/usr/bin/node
export default (list, city, newGrades) => {
  const ids = newGrades.map((v) => v.studentId);
  return list.filter((v) => v.location === city)
    .map((v) => {
      if (ids.includes(v.id)) {
        v.grade = newGrades[ids.indexOf(v.id)].grade; // eslint-disable-line no-param-reassign
      } else {
        v.grade = 'N/A'; // eslint-disable-line no-param-reassign
      }
      return v;
    });
};
