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


//for pratcie // from smaller to larger
const praticevalue = [5,6,5,,3,6,,8,6,4,3,8,98,199];
const mysortingarr = praticevalue.sort((a,b)=>a-b);
console.log(mysortingarr);


//for pratice //from larger to smaller

const againpratice = [5,6,5,,3,6,,8,6,4,3,8,98,199];
const myothersortingarr = againpratice.sort((a,b)=>b-a);
console.log(myothersortingarr);