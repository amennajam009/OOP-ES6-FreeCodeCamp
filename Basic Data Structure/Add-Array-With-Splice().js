//  we can delete and Add the element with the use of Splice method 

const MyArray = [11,12,13,14,15,15,16,17,18]
const PositionfromeheretoAdd = 4
const ValueToDelete = 1

MyArray.splice(PositionfromeheretoAdd , ValueToDelete , 'hello', 'world')
console.log(MyArray)