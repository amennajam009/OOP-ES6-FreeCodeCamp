// ES6 privide us new feature which is string literal or template literal with the use of this we can interpolluate alot of things 
// lemme show the example 

const MyObj = {
    name:'amen',
    education:'university',
    age:'20'
}
 
const greeting = `hello my name is ${MyObj.name}! i'm ${MyObj.age} years Old`
console.log(greeting)             


const MyObj1 = {
    name:'amen',
    education:'university',
    age:'20',
    color:'black',
      greeting:function(){
        return `Hi My name is ${MyObj1.name} i'm ${MyObj1.age} years Old . My favourite color is ${MyObj1.color}`
      }
}
console.log(MyObj1.greeting());
