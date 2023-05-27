// .Test() Method is used to test the string of it contains that word or not

const Mystring='Hey My Name Is Amen'
const FindtheName = /name/
let result = FindtheName.test(Mystring)
console.log(result) //OutPut false



const Mystring2='Hey My Name Is Amen'
const FindtheName2 = /Name/
let result2 = FindtheName.test(Mystring)
console.log(result2) //OutPut True