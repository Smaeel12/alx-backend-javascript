export default function createIteratorObject(report) {
  const arr = [];
  for (const dep of Object.values(report.allEmployees)) arr.push(...dep);
  return arr;
}
