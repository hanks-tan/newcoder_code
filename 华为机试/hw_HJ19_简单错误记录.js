/* 思路：
  1. 创建一个Map和一个数组,Map对象文件名和位置作为键，值是次数；数组只记录错误的位置
  2. 遍历错误记录，更新Map
    以 文件名 + 位置为键,
    1)如果错误位置已记录，则值+1，
    2)否则 值为1。同时把键push到数组对象
  3. 取数组最后的几天数据遍历，值从Map中取
*/
const fn = (lines) => {
  const sep = '\\' // 路径分隔符
  const max = 16 // 最大路径长度
  const maxError = 8 // 最大错误记录
  let errorMap = new Map()
  let keys = []
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let [name, num] = line.split(' ')
    name = name.slice(-max)
    if (name.includes(sep)) {
      const path = name.split(sep)
      name = path.slice(-1)
    }
    let row = `${name} ${num}`

    let count = errorMap.get(row)
    if (count) {
      errorMap.set(row, count + 1)
    } else {
      errorMap.set(row, 1)
      keys.push(row)
    }

    console.log(errorMap, errorMap.size)
  }
  let start = keys.length - maxError
  keys = keys.slice(start)
  keys.forEach((item) => {
    console.log(`${item} ${errorMap.get(item)}`)
  })
}

// 用于读取页面输入
const getData = () => {
  let i
  let lines = []
  while (i = readline()) {
    lines.push(i)
  } 
  return lines
}

// let a = 'D:\\zwtymj\\xccb\\ljj\\cqzlyaszjvlsjmkwoqijggmybr 645'
// let b = 'D:\\zwtymj\\xccb\\ljj\\jmkwoqijggmybr 645'
let test = 'D:\\zwtymj\\xccb\\ljj\\cqzlyaszjvlsjmkwoqijggmybr 645;' +
'E:\\je\\rzuwnjvnuz 633;' + 
'C:\\km\\tgjwpb\\gy\\atl 637;' + 
'F:\\weioj\\hadd\\connsh\\rwyfvzsopsuiqjnr 647;' + 
'E:\\ns\\mfwj\\wqkoki\\eez 648;' + 
'D:\\cfmwafhhgeyawnool 649;' + 
'E:\\czt\\opwip\\osnll\\c 637;' + 
'G:\\nt\\f 633;' + 
'F:\\fop\\ywzqaop 631;' + 
'F:\\yay\\jc\\ywzqaop 631;' + 
'D:\\zwtymj\\xccb\\ljj\\cqzlyaszjvlsjmkwoqijggmybr 645' 

fn(test.split(';'))