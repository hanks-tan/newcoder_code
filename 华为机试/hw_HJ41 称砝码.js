const fn = (mArr, xArr) => {
  let max = 0
  for (let i = 0; i< mArr.length; i++) {
    const w = mArr(i)
    const count = xArr(i)
    max += w * count
  }

  const size = new Map()
  for(let i = 0; i <= max; i++) {

  }
}