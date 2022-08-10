function fn(str, char) {
  let str1 = str.toUpperCase()
  let c = char.toUpperCase()
  let count = 0
  for(let i = 0; i < str.length; i++) {
      if (c === str1[i]) {
          count +=1
      }
  }
  return count
}

const data = readline()
const tar = readline()
console.log(fn(data, tar))