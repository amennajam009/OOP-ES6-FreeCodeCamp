// DestructingVia with Rest Elements 

const MyFunction = (list) =>{
  
    const [a,b,...shorthandlist] = list;
    return shorthandlist;
}
const arr=[1,2,3,4,5,6,7,8,9];
const sourceWithoutFirstTwo = MyFunction(arr);
console.log(sourceWithoutFirstTwo)