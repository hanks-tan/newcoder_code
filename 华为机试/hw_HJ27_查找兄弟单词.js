const fn = (line) => {
  let data = line.split(' ')
  let n = data[0]
  let target = data.slice(1, -2)
  let source = data[data.length - 2]
  let k = data[data.length - 1]
  
  let res = []
  let b = source.split('').sort()
  target.forEach((item) => {
    let a = item.split('').sort()
    if (item.length === source.length && item !== source && b.join('') === a.join('')) {
      res.push(item)
    }
  })
  console.log(res.length)
  if (k <= res.length) {
    console.log(res.sort()[k - 1])
  }
}

let a = '476 cb cba baad cbdb bdb acacd aba b cbbc b ccd d ddb acdab bab acc bc dccab bb daa cdcc dc adcab bd bbcab abc ba dd bdb dbbc ddbcd ab cc a c accb ddd cbc adb aad badd ad bac a addcb bcab d ccd b bc cdc acac adad d c ddc aba cac db dc aadbd bc cad baaa aaa d cddcc dabaa daa dcaac d db bab dbbbc cd acaab abbdc cda dddad a dbda cba cd dda bcca ccaca adbb bad c ba a ca d aca b bbdd dad bbcd abbcb ac aabac ca b ac dbbab bba bdcc cacbb bd a cbba badad ab ccda b c abcdc d bdab cbc ad dbcc bbddc ba caa ccac aadaa daad aacc dc dcb bca ab ccdda d cbbcc da ac b dcdba a adac ab dcc adac dd c bd bcd c ccbb dba abcb b cddc ccada dada dcca ddbbd c bda bac b bdbb bbba bdaa dda ac dd dcbbd ddccc badd adddd cba b b bbcab bcac bdad a adbd da ac adbbb cbbb caadb ab dc bdbc d c adb ab aadbd abad aaadc adcc b bbadd bbbc da acbb cbbdb bcdcc a bc ddba abadd ddc ada b bbcdc a bbccb bb a b cdac aab d dadad bad aabb dccba cd d cda b add dcacc bccdc add dc a cccd b aa ac dacbc a badb b dabbc b ddb acc c c a bc bc bcc dadc dad bba cbd b aa cbb a ababc da bc dcbcc dcbb aaad bdac ddbc bbbb bdbca d a cadac aaa dcd cc b dccba aadbd ddbbc aadb bca dcdcc a d c d b dbc abddb ccadb ccca ddda cd bbda adc ba bab adadb aaaa dbac abac acbb a cbd a dbdcd cdc c daaba a bc dabb bc aaadc b bdcc baaa addb ad dbdca cbb cbdd dc d dcbb bdd dca cad ddd cdbdd ca d c cd ddcda badb ab ba bc dcd add cc bb d dcda bbc abdb bd ba abcb d c ddaab cbbc cad bdb ba ba dbdcb dcddb dd cbdc cdd b cbcdb add bba bcaba d aba d cbcba bacb a abbca cdabc bdaa dbd bd ddc bacc bbcdc c bdbbb dd b cdc ba daaba ab b caac baad dcaca cda cbc cbdba bd dbbba aad b bbbba bbdc cdbb abc ddaa d c c bcd dcb adabd c bbc bb cd bccc ac d bbb cbd ad aad bcbaa bda ad d badba a a aa abacc cd bbbc d b ccbb dccad a ac bcbc bddc ddcad ddcb dd a dacb dddad dcb ac add ddc aa cc b ad baccb cda cbbdd adab abbdb c d bcb b ca cbdbd abbc dc abd bac bab bbb bcab cdaab bbaa 3'
fn(a)