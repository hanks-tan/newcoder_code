const fn = (data) => {
  let a = data.toString()
  a = a.slice(2)
  let map = {
    'A': 10,
    'B': 11,
    'C': 12,
    'D': 13,
    'E': 14,
    'F': 15
  }
  let n = 0
  for(let i = a.length - 1, j = 0; i >= 0; i--) {
    const c = a[i]
    let m = parseInt(c) > -1? parseInt(c) : map[c]
    if (i === a.length - 1) {
      n = m
    } else {
      n += m * Math.pow(16, j)
    }
    j += 1
  }
  return n
}

// console.log(fn('0xBA'))
console.log(fn('0x1504'))