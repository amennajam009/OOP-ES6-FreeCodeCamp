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
    if(i===2){
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



//NESTED FOR LOOP

let myArr = [2,3,4,5,6];

let total = 0;
for(let i=0;i<myArr.length;i++){
    total+=myArr[i]
}


