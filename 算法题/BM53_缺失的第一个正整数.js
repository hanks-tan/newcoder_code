/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @return int整型
 */
 function minNumberDisappeared( nums ) {
  // write code here
  const hash = new Map()
  let j = 0
  for(let i = 0; i < nums.length; i++) {
      hash.set(nums[i], i)
  }
  for(let i = 1; i <= nums.length; i++) {
      if (hash.get(i) === undefined) {
          return i
      }
  }
  return nums.length + 1
}
module.exports = {
  minNumberDisappeared : minNumberDisappeared
};