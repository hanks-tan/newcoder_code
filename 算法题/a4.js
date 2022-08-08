
function GetLeastNumbers_Solution(input, k)
{
    // write code here
    let stack = []
    if (k === 0) {
      return []
    }
    input.forEach((item) => {
      if(stack.length === 0) {
          stack.push(item)
      } else {
        let stack1 = []
        let node = stack.pop()
        if (node > item) {
          while (node && node > item) {
            stack1.push(node)
            node = stack.pop()
          }
          if (!node) {
            stack.push(item)
          } else {
            stack.push(node)
            stack1.push(item)
          }
        } else {
          stack.push(node)
          stack1.push(item)
        }
        while (stack1.length > 0 && stack.length < k) {
          stack.push(stack1.pop())
        }
      }
    })
    return stack
}

a = [4,5,1,6,2,7,3,1,8, 5, 4,9]

res = GetLeastNumbers_Solution(a, 4)
console.log(res)