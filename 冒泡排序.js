const fn = (arr) => {
  if (arr.length === 0) return arr
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      let a = arr[j]
      let b = arr[j + 1]
      if (a > b) {
        arr[j] = b
        arr[j + 1] = a
      }
    }
  }
  console.log(arr)
}

fn([1,4,12,5,3,7,0,-1])