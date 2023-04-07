let til=['java','python']
console.log(til)
til.push('c++')
console.log(til)
let meva=['olma','nok']
console.log(meva)
meva.unshift('banan')
console.log(meva)
const kiyim=['kuylak','palto','shapka']
console.log(kiyim)
kiyim[1]='kostyum'
kiyim[2]='shim'
console.log(kiyim)
let mashina=['bmw','bugatti','mercedes-benz','samara']
console.log(mashina)
const cansel=mashina.pop();
console.log(mashina)
console.log(cansel)
let kompyuter=['acer','hp','lenovo']
console.log(kompyuter)
let yangi=kompyuter.shift()
console.log(kompyuter)
console.log(yangi)
let son1=[1,8,539]
let son2=[4,7,545]
let natija=son1.concat(son2)
console.log(natija)
let qiymat=[2,78,-4,53.4,-95.3]
const result=number=>number<0
const hisob=qiymat.filter(result)
console.log(hisob)
const raqam=number=>"Son=" +number
const javob=qiymat.map(raqam)
console.log(javob)
const hisoblash=(number1,number2)=>number1-number2
qiymat.sort()
console.log(qiymat)