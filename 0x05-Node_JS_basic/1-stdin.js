#!/usr/bin/node
/* A script that interracts with the user trough the cli. */
console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const userName = process.stdin.read();
  if (userName) process.stdout.write(`Your name is: ${userName}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
