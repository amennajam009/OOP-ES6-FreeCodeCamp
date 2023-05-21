// With the use of Destructing We can swap Our array values 

const MyValues = [fruits = ['bananana', 'apple','mango','grapes'], numbers= [ 1,2,3,4,5,6,7] ];
[fruits,numbers] = [numbers,fruits];
//now the output will be the array of number will be in index 0 and fruits object will be on 1 index

const MyFruits = ['bananan', 'apple','mango', 'grapes', 'strawberry'];
//now i want to reverse this whole array
[...MyFruits].reverse();



//merge two array 
const Arr1= [0,1,2,3,4,5]
const Arr2 = [6,7,8,9,10]
const MergingTwoArry= Arr1.concat(Arr2);
console.log(MergingTwoArry)


