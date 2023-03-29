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