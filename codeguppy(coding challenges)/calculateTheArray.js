//Calculate The number Given in Array 

const myArrfuntion = (arr) =>{
    let sum=0
   for(let i=0;i<arr.length;i++){
    sum+=i
   }
   return sum
}
const arr = [1,2,3,4,5,6,7,8]
const sumresult = myArrfuntion(arr)
console.log(sumresult)