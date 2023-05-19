//Spread Operator
//spread operator in actual humra woh operator hai jo k humry ek array ko ek object may badal skta hai like phly 
//hum rest parameter ko parameters may dety thy or later use but now we can conver our array into object with the ue of spread operator

const Myfunction = (...argu) =>{
 return 'You Have Passed' + argu.length + 'Level of game'
}
console.log(Myfunction(7));