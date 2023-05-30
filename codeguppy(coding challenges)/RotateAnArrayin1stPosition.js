// If We are Given An array In which 
//we want to the 1st index to be on 0 index so how we gonna do this


const arr = ['mango','apple','banana']
arr[0]='apple'
arr[1]='mango'
arr[2]='banana'

console.log(arr);

//Problem No 2
//reverse A string 

const MyFunction = () =>{
    let Mystring = 'Hey My Name is Amen'
  Mystring =  Mystring.split('').reverse().join('')
    return Mystring
}
console.log(MyFunction());

//Reverse Array 

const My2ndFunction = ()=>{
    const MyArr = [1,2,3,4,5,6,7]
    const ReverseMyArr = [...MyArr].reverse()
    return ReverseMyArr;
}
console.log(My2ndFunction())


//Merge Two Array 
const My3rdFunction = (arr1,arr2) =>{
  const MergeMyArr = arr1.concat(...arr2)
  return MergeMyArr;
}
console.log(My3rdFunction([1,2,3,4],[5,6,7,8]));