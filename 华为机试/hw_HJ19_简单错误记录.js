const fn = (lines) => {
  const sep = '\\' // 路径分隔符
  const max = 16 // 最大路径长度
  const maxError = 8 // 最大错误记录
  let errorList = []
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let [name, num] = line.split(' ')
    name = name.slice(-max)
    if (name.includes(sep)) {
      const path = name.split(sep)
      name = path.slice(-1)
    }
    let row = `${name} ${num} 1`
    if (errorList.includes(row)) {
      let index = errorList.indexOf(row)
      let n = parseInt(row.slice(-1))
      errorList[index] = `${name} ${num} ${n + 1}`
    } else {
      if (errorList.length < maxError) {
        errorList.push(row)
      } else {
        errorList = errorList.slice(1)
        errorList.push(row)
      }
    }
  }

  errorList.forEach((item) => {
    console.log(item)
  })
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
'D:\\zwtymj\\xccb\\ljj\\cqzlyaszjvlsjmkwoqijggmybr 645;' 

fn(test.split(';'))

XXX