//When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.

// #1
var NumberArray=[];
for (i=0 ;  i<3  ;  i++){
    NumberArray.push(i)
}
console.log(i);
console.log(NumberArray);


// #2
var NumberTwo = [];
for(i=0; i < 10; i++){
    NumberTwo.push(i)
}
console.log(i);
console.log(NumberTwo);

// # 3 

var Numberthree = [];
for(i=0; i<20 ; i++){
    Numberthree.push(i);
}
console.log(i);
console.log(Numberthree);


//compare the block scope of var and let keywords
//when we declare the variable with the keyword var so it will declare globally nd locally both 

var newarray=[];
for(i=0; i<3 ; i++){
   newarray.push(i);
}
console.log(newarray);
console.log(i);


var secondarray=[];
for(i=0; i<10 ; i++){
    secondarray.push(i);
}
console.log(secondarray);
console.log(i);


var anotherarray;
for(i=0; i<3 ; i++){
    if(i===4){
    anotherarray = function(){
        return i ;
    }
    }
}
console.log(anotherarray());


let anotherarray2;
for(i=0; i<3 ; i++){
    if(i === 2){
        anotherarray2 = function(){
            return i;
        }
    }
}
console.log(anotherarray2());


var newarray;
for(i=0; i <3 ; i++){
    if(i===2){
        newarray = function(){
            return i ;
        }
    }
}
console.log(newarray());

let myarray;
for(i=0; i<3 ; i++){
    if(i===2){
        myarray = function(){
            return i ;
        }
    }
}
console.log(myarray());


const s = [5, 6, 7];
// s = [1, 2, 3];
s[2] = 45;
console.log(s);



//SIMPLE FOR LOOP

let myArr = [2,3,4,5,6];
let total = 0;
for(let i=0;i<myArr.length;i++){
    total+=myArr[i]
}

 //#2
let MysecondArr = [1,2,3,4,5,6,7,8];
let result= 0;
for (let mygivenvalue=0; mygivenvalue<MysecondArr.length;mygivenvalue++){
    result +=MysecondArr[mygivenvalue]
}

// #3
// ternary Operator 
//Before

function Testingfunction(a,b){
  if(a>b){
    return "A is Greater"
  }
  else{
    return "B is Greater"
  }
}
Testingfunction(10,20);

function AntoherTestingfunction(firstvalue,secondvalue){
    if(firstvalue===secondvalue){
      return  "Yes this is true"
    }
    else{
     return   "No it's not True"
    }
}
console.log(AntoherTestingfunction(20,20))
//Now i'll do the same thing but now i use ternary operators 

const MyValues = (valueone,valuetwo) =>{
   return valueone>valuetwo? "Yes it's true" : "no it's not true";
}
console.log(MyValues(20,30));

const againmyvalues = (sum1,sum2) =>{
    return sum1===sum2 ? "yes it's equal": "no it's not equal";
}
console.log(againmyvalues(10,10));

// multiple ternary operator

const Multipleternaryoperator = (num1,num2) =>{

    return (num1===num2)? "num1 and num2 are equal" : (num1>num2)? "num1 is greater":"num2 is greater";
}
console.log(Multipleternaryoperator(25,20));

const Myfunction = (num) =>{
  return (num>0)? "positive" : (num<0) ? "Negative" : "zero";
}
console.log(Myfunction(-2))


// mery pas ek array hai jimsay mery pas hai 1,2,3 or dhusri hai 4,5,6,7
// mai chahti hun yeh dono mai sth may likhu toh kesy likhugi

const myBotharray = (arr1,arr2) =>{
 return arr1.concat(arr2)
};
console.log(myBotharray([1,2,3,4],[5,6,7,8]));


//in ES6 they introduce us the concept of default Value by using the default value we can set our values byDefault 
const ByDefaultValueFunction = (number,Value=2) =>{
    return number+Value;
}
console.log(ByDefaultValueFunction(5,3));

//again bydefault Function 
// these are called bydefault parameters
const AgainByDefault = (ourValue , defaultValue = 10) =>{
    return ourValue === 12? "our value is greater" : ourValue + defaultValue;           
} 
console.log(AgainByDefault(18)) //output will be 28




