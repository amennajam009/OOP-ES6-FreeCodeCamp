//sort an array from lower to hightest

const MyArr = [5,6,7,4,3,2,1,7,9,8];
const arr = MyArr.sort((a,b) => a-b)
console.log(arr)


//again
const Values = [33,55,77,88,1,3,4,5,2,6,,8,9,5];
const value2 = Values.sort((a,b) => a-b)
console.log(value2)


//Sort an array from larger number to smaller
//this one is not correct
const Myvalue = [1,2,3,4,5,6,7,8,9,10];
const solvingMyValue = Myvalue.sort((b,a)=> b-a );
console.log(solvingMyValue);

// sort an array from smaller to larger 

const Myothervalue = [10,9,8,7,6,5,4,3,2,1];
const sortingmyarray = Myothervalue.sort((a,b)=> a-b);
console.log(sortingmyarray)

// To print From larger to smaller
const OurArr = [1,2,3,4,5,6,7,8,9,10];
const OurnewArr = OurArr.sort((a,b)=> b-a);
console.log(OurnewArr)