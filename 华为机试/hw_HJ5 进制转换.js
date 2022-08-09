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
    let m = parseInt(c) ? parseInt(c) : map[c]
    if (i === a.length - 1) {
      n = m
    } else {
      n += 16 * Math.pow(m, j)
    }
    j += 1
  }
  return n
}

console.log(fn('0xBA'))