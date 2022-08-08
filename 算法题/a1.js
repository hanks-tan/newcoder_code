/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
  * 
  * @param head ListNode类 
  * @param m int整型 
  * @param n int整型 
  * @return ListNode类
  */
 function reverseBetween( head ,  m ,  n ) {
  const range = []
  const left = [head]
  const right = []
  let cur
  let index = 1
  while (true) {
    const next = head.next
    if (!next) {
      console.log('到底链表尾')
      break
    } else {
      cur = next
      if (index < m) {
        left.push(cur)
      } else if (index > n) {
        right.push(cur)
      } else {
        range.push(cur)
      }
      len += 1
    }
  }
  for(let i =0; i < range.length; i++) {
    cur = range[i]
    if (i === 0) {
      cur.next = right[0]
    } else {
      cur.next = range[i - 1]
    }
  }
      
}
module.exports = {
  reverseBetween : reverseBetween
};