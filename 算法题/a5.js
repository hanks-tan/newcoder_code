function minNumberDisappeared( nums ) {
  // write code here
  const hash = new Map()
  let j = 0
  for(let i = 0; i < nums.length; i++) {
      hash.set(nums[i], i)
  }
  for(let i = 0; i < nums.length; i++) {
      if (hash.get(i) === undefined) {
          return i
      }
  }
  return nums.length
}

const a = [1,0,2]
const res = minNumberDisappeared(a)
console.log(res)