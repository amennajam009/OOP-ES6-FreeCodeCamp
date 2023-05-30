//We will find the Max number From Array 

const MyArray = [1,3,6,77,8,9,5,5,6,3]
const FindMaxNumber = Math.max(...MyArray);
console.log(FindMaxNumber)


//We will Find The Min Number From Array

const MyArray2 = [1,2,3,4,5,6,7,4,5,6]
const FindMinNumber = Math.min(...MyArray2);
console.log(FindMinNumber)





let ar = [1, 2, 3];
rotateLeft(ar);
console.log(ar);

function rotateLeft(ar)
{
    let first = ar.shift();
    ar.push(first);
}