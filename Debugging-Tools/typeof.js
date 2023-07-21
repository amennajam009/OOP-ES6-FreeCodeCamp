// The typeof is actually used to see that what type of variable it is actually let suppose we're adding 
// two number in which one variable is number and other is string so typeof will help us to tell the type 
// of the variable

const variable1 = 7
const variable2 = 'Its type is String'
const variable3 = true
console.log(typeof variable1) // output will be number
console.log(typeof variable2) // output will be string
console.log(typeof variable3) // output will be boolean


//Another Example for pratice 
const myfunction = (arr1,arr2) =>{
return arr1.concat(...arr2)
}
console.log(typeof myfunction([1,2,3,4,5],[6,7,8,9])) //output will be object in our console

