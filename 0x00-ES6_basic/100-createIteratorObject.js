export default function createIteratorObject(report) {
  let arr = new Array()
  for (let dep of Object.values(report.allEmployees))
    arr.push(...dep)
  return arr
}
