// function expression humry woh functions hoty han jismay hum
// ek varibale may function assign krty han or usmay paramets pass krty han 

const Add = function (a,b){
    return a+b;
}
console.log(Add(10,20)); //output will be 30



//2nd
const Addagain = function (value1,value2){
    return value1-value2;
}
console.log(Addagain(30,20)); //output will be 10

const MyVar = function (value1,value2){
    if(value1===value2){
        return "Value1 and value2 are Equal"
    }
   if (value1>value2) {
    return "value1 is greater then value2"
   } 
   if(value1<value2){
    return "Value2 is greater then value1"
   }
   else{
    return value1+value2
   }
}
console.log(MyVar(22,20))


//3rd
const newValue = function(sum1,sum2){
    if(sum1===sum2){
        return true
    }
    if(sum1 !==sum2){
        return false
    }
}
console.log(newValue(22,20))
