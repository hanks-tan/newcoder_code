/**
  * 
  * @param s string字符串 
  * @return bool布尔型
  */
 function isValid( s ) {
  // write code here
  let stack = []
  const left = ['{', '[', '(']
  const right = ['}', ']', ')']
  let v = 0
  for(let i = 0; i < s.length; i++) {
      const c = s[i]
      if (stack.length === 0) {
          if (left.includes(c)) {
              v = left.indexOf(c)
              stack.push(v)
          } else {
              return false
          }
      } else {
          if (left.includes(c)) {
              v = left.indexOf(c)
              stack.push(v)
          } else {
              const r = right.indexOf(c)
              if (r !== stack.pop()) {
                  return false
              }
          }
      }
  }
  return stack.length === 0
}
module.exports = {
  isValid : isValid
};