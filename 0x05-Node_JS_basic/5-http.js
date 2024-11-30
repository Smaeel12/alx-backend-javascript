#!/usr/bin/node
const http = require('http');
const fs = require('fs').promises;

const fileName = process.argv[2];
const port = 1245;
const host = 'localhost';

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

/* A script that creates an HTTP server on a specific port and host and
listens for requests on it. */

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(fileName).then((responseBody) => {
      res.end(`This is the list of our students\n${responseBody}`);
    }).catch((error) => {
      res.end(`This is the list of our students\n${error.message}`);
    });
  }
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

module.exports = app;
