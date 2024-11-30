#!/usr/bin/node
/* The function countStudents that takes content from a database and
filters trough it. */
const fs = require('fs').promises;

const countStudents = (path) => new Promise((resolve, rejects) => {
  fs.readFile(path, 'utf8').then((response) => {
    const data = response.split('\n').map((line) => line.split(',')).slice(1, -1);
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
    resolve('Done!');
  }).catch(() => {
    rejects(new Error('Cannot load the database'));
  });
});

module.exports = countStudents;
