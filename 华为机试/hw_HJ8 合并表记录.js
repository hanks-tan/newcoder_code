const fn = (inputList, n) => {
  const table = new Map()
  const idxList = []
  inputList.forEach((item) => {
    let [idx, val] = item.split(' ')
    idx = parseInt(idx)
    val = parseInt(val)
    if (table.get(idx) > 0) {
      val += table.get(idx)
    }
    table.set(idx, val)

    if (!idxList.includes(idx)) idxList.push(idx)
  })

  idxList.sort((a, b) => a - b)
  idxList.forEach((idx) => {
    console.log(`${idx} ${table.get(idx)}`)
  })
}

// 读取输入
const n = readline()
const data = []
let i = 0
while (i < n) {
  data.push(readline())
  i++
}

fn(data, n)