// Anonymous functions are those function jinka koi name nai hota hai 

let myvar = function(a,b){
    return a+b;
}
console.log(myvar(1,2))
//or inko hun function expression bolty han but phly hum function with the name esy likty thy

function myvar(value1,value2){
 if(value1===value2){
    return "value1 is equal to value2"
 }
 if(value2!==value1){
    return "they are not equal"
 }
}
console.log(myvar(22,20))
