/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param root TreeNode类 
 * @return int整型一维数组
 */
 function inorderTraversal( root ) {
  // write code here
  if(!root) return []
  let res = []
  const fr = function(data) {
      if (data.left) {
          fr(data.left)
      }
      res.push(data.val)
      if (data.right) {
          fr(data.right)
      }
  }
  fr(root)
  return res

}
module.exports = {
  inorderTraversal : inorderTraversal
};