const fn = (str) => {
  let x = 0
  let y = 0
  const doing = str.split(';')
  const reg = /^[A, S, D, W][0-9]{1,2}$/
  for (let i = 0; i < doing.length; i++) {
    const cur = doing[i]
    if (!reg.test(cur)) {
      continue
    }
    let oper = cur[0]
    let val = parseInt(cur.slice(1))
    switch (oper) {
      case 'A':
        x = x - val
        break;
      case 'D':
        x = x + val
        break;
      case 'W':
        y = y + val
        break;
      case 'S':
        y = y - val
        break;
      default:
        break;
    }
  }
  console.log(x, y)
}

let a = 'ABC;AKL;DA1;'

fn(a)