function fn(str) {
  const arr = str.split(' ')
  return arr[arr.length - 1].length
}

const line = readline()
console.log(fn(line))