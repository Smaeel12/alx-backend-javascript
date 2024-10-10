/* eslint no-param-reassign: "error" */
export default (list, city, newGrades) => {
  const ids = newGrades.map((g) => g.studentId);
  return list.filter((v) => v.location === city)
    .map((v) => {
      const idx = ids.indexOf(v.id);
      if (idx !== -1) v.grade = newGrades[idx].grade;
      else v.grade = 'N/A';
      return v;
    });
};
