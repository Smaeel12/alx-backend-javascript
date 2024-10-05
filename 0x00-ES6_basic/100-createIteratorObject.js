export default function createIteratorObject(report) {
  // Symbol ( still not working )
  // return {
  //   [Symbol.iterator]: function () {
  //     let n = 0
  //     return {
  //       next() {
  //         if (n == report.getNumberOfDepartments()) return { done: true }
  //         for (const emp of Object.values(report.allEmployees)[n]){
  //           if (emp == null) { n += 1 }
  //           return { value: emp, done: false }}
  //       }
  //     }
  //   }
  // }

  // Generator...
  return (function* _() {
    for (const dep of Object.keys(report.allEmployees)) {
      for (const name of report.allEmployees[dep]) {
        yield name;
      }
    }
  }());

  // Spread...
  // const arr = [];
  // for (const dep of Object.values(report.allEmployees)) arr.push(...dep);
  // return arr;
}
