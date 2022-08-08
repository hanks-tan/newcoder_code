function threeSum( num ) {
  // write code here
  // TODO 不多
  if (num.length === 0) return []
  let hash = new Map()
  for(let i = 0; i < num.length - 1; i++) {
      for(let j = i + 1; j < num.length; j++) {
        hash.set(`${i}${j}`, [num[i], num[j]])
      }
  }
  const res = []
  hash.forEach((val, key) => {
    num.forEach((item, i) => {
      if (!key.includes(i) && (item + val[0] + val[1]) === 0) {
        res.push([item, val[0], val[1]])
      }
    })
  })
  return res
}