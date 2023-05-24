//Calculate the sum of numbers within an array

const calculatesum = (array) =>{
 let sum = 0
 for(i=0;i<array.length;i++){
    sum+=array[i]
 }
 return sum
}

const array = [1,2,3,4,5,6,7,8]
const sumofarray = calculatesum(array);
console.log(sumofarray);



//Agian Calculating the sum of array 

const myfunction = (arr) =>{
 let sum = 0 
 for (let i=0; i<arr.length;i++){
    sum+=arr[i]
 }
 return sum
}
const arr = [1,2,3,4,5,6];
const calculating = myfunction(arr);
console.log(calculating);


//what if i want to multiply array

const multiply = (arr) =>{
 let multiple = 1 
 for( let i=0 ; i<arr.length ; i++){
    multiple *= arr[i]
 }
 return multiple;
}

const arr1 = [1,2,3,4,5];
const multiplying = multiply(arr1);
console.log(multiplying);