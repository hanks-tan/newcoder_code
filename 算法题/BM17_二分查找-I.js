/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @param target int整型 
 * @return int整型
 */
 function search( nums ,  target ) {
  // write code here
  let l = nums.length
  if (l === 0) {
      return -1
  }
  let [start, end] = [0, l - 1]
  while (start <= end) {
      let mid = start + Math.floor((end - start) / 2)
      if (nums[mid] === target) return mid
      else if (nums[mid] > target){
          end = mid - 1
      } else {
          start = mid + 1
      }
  }
  return -1
}
module.exports = {
  search : search
};