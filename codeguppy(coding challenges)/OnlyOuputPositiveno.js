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





//same as negative 
const MyNegativeFunction = (arr2) =>{
    let Result = []
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            Result.push(arr[i])
        }
    }
    return Result;
}
const arr2=[1,2,3,4,-6,-8,-4,-6,-2,-9,5]
const MyArroutput = MyNegativeFunction(arr2);
console.log(MyArroutput)