//Create  A function that filter-Out All negative Values

const Myfunction = (arr) =>{
return arr.filter((value)=>value >=0);
}

const number = [1,2,3,-7,-9,4,5,-10,5,7,-30];
const showonlypositivevalues = Myfunction(number);
console.log(showonlypositivevalues)