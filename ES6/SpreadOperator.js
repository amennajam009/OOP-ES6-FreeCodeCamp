//Spread Operator
//spread operator in actual humra woh operator hai jo k humry ek array ko ek object may badal skta hai like phly 
//hum rest parameter ko parameters may dety thy or later use but now we can conver our array into object with the ue of spread operator

let myArr=['amen','hats','xyz','blue']
let myobj={...myArr}
console.log(myobj);


let AnotherArr=[0,1,2,3,4];
let anotherObj = [...AnotherArr,5,6,7,8,9];
console.log(anotherObj);