#!/usr/bin/node
/* The function countStudents that takes content from a database and
filters trough it. */
const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8').split('\n').map((line) => line.split(',')).slice(1, -1);
    const csStudentsList = [];
    const sweStudentsList = [];
    for (const list of data) {
      if (list[3] === 'CS') {
        csStudentsList.push(list[0]);
      } else {
        sweStudentsList.push(list[0]);
      }
    }
    const studentsCount = csStudentsList.length + sweStudentsList.length;
    console.log(`Number of students: ${studentsCount}`);
    console.log(`Number of students in CS: ${csStudentsList.length}. List: ${csStudentsList.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudentsList.length}. List: ${sweStudentsList.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
