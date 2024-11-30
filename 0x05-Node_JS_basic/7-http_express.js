#!/usr/bin/node
/* Creating a small HTTP sever using express module. */
const express = require('express');
const fs = require('fs').promises;

const app = express();
const fileName = process.argv[2];
const port = 1245;

/* The function countStudents that takes content from a database and
filters trough it. */

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
    const responseBody = `Number of students: ${studentsCount}\n`
                       + `Number of students in CS: ${csStudentsList.length}. List: ${csStudentsList.join(', ')}\n`
                       + `Number of students in SWE: ${sweStudentsList.length}. List: ${sweStudentsList.join(', ')}`;
    resolve(responseBody);
  }).catch(() => {
    rejects(new Error('Cannot load the database'));
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(fileName).then((responseBody) => {
    res.end(`This is the list of our students\n${responseBody}`);
  }).catch((error) => {
    res.end(`This is the list of our students\n${error.message}`);
  });
});

app.listen(port, () => {
  console.log(`The app is listening on ${port}.`);
});

module.exports = app;
