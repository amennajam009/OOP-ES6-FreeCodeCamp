// Return a Boolean if a number is divisible by 10


//20, 40, 50, 170, and 990 are all divisible by 10 because their last digit is zero, 0
// On the other hand, 21, 34, 127, and 468 are not divisible by 10 since they don't end with zero.
const Myfunction = (number) =>{
  if(number %10 ===0){
    return true
  }
  else{
    return false
  }
}
console.log(Myfunction(20));  // Output true :)


const Myotherfunction = (number) =>{
 return  (number %10 ===0)? true:false
}
console.log(Myotherfunction(20))