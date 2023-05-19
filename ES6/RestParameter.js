//Spread Operator
//spread operator in actual humra woh operator hai jo k humry ek array ko ek object may badal skta hai like phly 
//hum rest parameter ko parameters may dety thy or later use but now we can conver our array into object with the ue of spread operator

const Myfunction = (...argu) =>{
 return 'You Have Passed' + argu.length + 'Level of game'
}
console.log(Myfunction(0,1,2,3,4,5));



//second function

const AnotherFunction = (...argu) =>{
    let total=0
  for(let i=0; i<argu.length; i++){
    total +=argu[i]
  }
  return total
}
console.log(AnotherFunction(1,2,3,4,5))


//here i'm using 4 parameters in which i set 1 default value 2 other values and one as rest parameter
const AnotherFunction2 = (defaultvalue=2,value1,value2) =>{
  
    return (value1===value2)? "Value1 & Value2 are equal" : false || "They're Not Equal" (value1 !== value2)? "they're undefined" : true
}
console.log(AnotherFunction2(3,4));

