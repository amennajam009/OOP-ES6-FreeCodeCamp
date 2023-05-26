//Create  A function that filter-Out All negative Values

const Myfunction = (arr) =>{
return arr.filter((value)=>value >=0);
}

const number = [1,2,3,-7,-9,4,5,-10,5,7,-30];
const showonlypositivevalues = Myfunction(number);
console.log(showonlypositivevalues)





//Antoher way to filterout negative values

const FilterOutNegativenumber = (arr) =>{
 const Result = []
 for(let i=0; i<arr.length;i++){
    if(arr[i]>=0){
        Result.push(arr[i])
    }
 }
 return Result
}
const number2 = [1,2,3,5,7,-5,-7,-3,2,3,4,5]
const OutPutResult = FilterOutNegativenumber(number2);
console.log(OutPutResult);


//Again For pratice 

const PraticeFuntion = (arr) =>{
    const Result = []
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            Result.push(arr[i])
        }
    }
    return Result
}
const Mynumbers = [1,2,3,4,-6,-7,-3,-6,-3,5];
const GetOupt = PraticeFuntion(Mynumbers);
console.log(GetOupt);

//now what if i want to print only negative Values 

const ShowNegativeValuesOnly = (myarr) =>{
    const Result = []
    for(let i=0;i<myarr.length;i++){
        if(myarr[i]<0){
            Result.push(myarr[i])
        }
    }
    return Result
}
const MyNumbers = [1,2,3,-4,-6,-7,-3,-6,3,4,5]
const OUTPUT = ShowNegativeValuesOnly(MyNumbers)
console.log(OUTPUT)