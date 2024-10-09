#!/usr/bin/node
export default (list, city, newGrades) => {
  let ids = newGrades.map(v => v.studentId)
  return list.filter(v => v.location === city)
    .map(v => {
      if (ids.includes(v.id))
        v.grade = newGrades[ids.indexOf(v.id)].grade
      else
        v.grade = 'N/A'
      return v
    })
}