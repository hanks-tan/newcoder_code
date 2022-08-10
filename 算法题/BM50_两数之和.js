/**
  * 
  * @param numbers int整型一维数组 
  * @param target int整型 
  * @return int整型一维数组
  */
 function twoSum( numbers ,  target ) {
  // write code here
  const hash = new Map()
  for(let i = 0; i < numbers.length; i++) {
      const val = numbers[i]
      let j = hash.get(target - val)
      if (j !== undefined) {
          return [j + 1, i + 1]
      } else {
          hash.set(val, i)
      }
  }
}
module.exports = {
  twoSum : twoSum
};