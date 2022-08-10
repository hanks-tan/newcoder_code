/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param array int整型一维数组 
 * @return int整型一维数组
 */
 function FindNumsAppearOnce( array ) {
  // write code here
  const hash = new Map()
  for(let i = 0; i < array.length; i++) {
      const r = hash.get(array[i]) ? 0 : 1
      hash.set(array[i], r)
  }
  let res = []
  hash.forEach((val, key) => {
      if (val) {
          res.push(key)
      }
  })
  let [a, b] = res[0] < res[1] ? res : [res[1], res[0]]
  return [a, b]
}
module.exports = {
  FindNumsAppearOnce : FindNumsAppearOnce
};