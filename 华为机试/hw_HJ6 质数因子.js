/*
循环终止条件是 i的平方小于输入值,这个一时没反应过来
*/
const fn = (n) => {
  n = parseInt(n)
  if (n === 1) {
    console.log('')
    return
  }
  let res = []
  let i = 2
  let last = n
  while (i <= last && i * i <= n) {
    if (last % i === 0) {
      last = last / i
      res.push(i)
      continue
    } else {
      ++i
    }
  }
  if (last > 1) {
    res.push(last)
  }
  console.log(res.join(' '))
}

fn(1)
fn(2)
fn(3)
fn(4)
fn(5)
fn(6)
fn(180)
fn(93938)
fn(64577)
fn(2000000014) // 这个超时