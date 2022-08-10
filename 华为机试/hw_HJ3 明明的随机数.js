const fn = (count) => {
  let i = 0
  let arr = []
  while(i < count) {
      let num = readline()
      if (arr.length === 0) arr.push(num)
      else if (!arr.includes(num)) {
          arr.push(num)
      }
      else {
          
      }
      i += 1
  }
  arr.sort((a, b) => {
      return parseInt(a) - parseInt(b)
  })
  
  arr.forEach((item) => {
      console.log(item)
  })
}

const r = readline()
fn(r)