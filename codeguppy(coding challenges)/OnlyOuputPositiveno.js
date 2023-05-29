//An array that output only Positive numbers

const MypositiveNumberArr = (arr) =>{
    let Result = []
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
         Result.push(arr[i])
        }
    }
    return Result;
}
const arr = [-4,6,5,3,-8,-4,-3,6,7,4,3]
const FinalOutput = MypositiveNumberArr(arr)
console.log(FinalOutput)