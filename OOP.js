// Objects 
// (Ab Object is the container which contians we can store our Values to to form a data structure . An object is used to represent the specific indentity such as person , name etc)

let MyObject ={}
let MyUpcomingObject = {
    name:"Amen Najam",
    Class:"1st Sem VU",
    Email:"amennajam@gmail.com"
}
// console.log(MyUpcomingObject)
MyObject.name="Hello World"

// However, sometimes we don't need to assign any values to an object when we first create it. In this case, we can create an empty object with curly braces "{}" and no values inside

let MyObject = {
    name:"amen",
    Class:"5th",
    contact:"090078061",
    fatherInfo:{
        FatherName:"Najam William",
        Email:"testing@gmail.com",
        Phone:"090078601" ,
        MotherInfo:{
            Name:"string",
            FatherName:"string",
            PhoneNUmber:"09007744332",
            Email:"testing@gmail.com"
        }
    }
}

console.log(MyObject);
//Myvariable is the property init
const Myvariable = {
    name:"amen",
    class:"sdf",
    phone:"0349032343",
    Email:"amennajam@gmail.com",
    Institute:"skfnsjdfhsf"
}
console.log(Myvariable);


const MyObject = {
    Fistname:"amen",
    Lastname:"najam",
    phone:"857589303045",
    Email:"hdhduukskso",
    FavColor:"pink",
    // function is method init
    ShowfullName: function(){
        return  this.Fistname  + this.Lastname;
    }
};
console.log(MyObject.ShowfullName());

const  Example ={
    FistLet:"My",
    SecondLet:"Name",
    ThirdLet:"Is",
    ForthLet:"Amen",
    FifthLet:"Najam",
    OutputweWant : function(){
        return this.FistLet + " " + this.SecondLet + " " + this.ThirdLet + " " + this.ForthLet + " " + this.FifthLet;
    }
}
console.log(Example.OutputweWant());

const Example2={
    FistLet:"hello",
    second:"My",
    Third:"Name",
    Forth:"Is",
    Fifth:"Amen",
    Sixth:"Najam",
    Seventh:":)",
    CompleteSentence: function(){
        return this.FistLet+" "+this.second+" "+this.Third+" "+this.Forth+" "+this.Fifth+" "+ this.Sixth+" "+this.Seventh;
    }
}
console.log(Example2.CompleteSentence());

//ObjectConstructor

let ObjectConstructor = {
    name:"amen",
    Lastname:"najam",
    Phone:"+9248584754875",
    address:{
        City:"Lahore",
        Country:"Pakistan",
        Loaction:"string",
    },
    showName:function(){
        return this.name+" "+this.Lastname;
    }
}
console.log(ObjectConstructor.showName());


//object Constructor
let ObjectConstructor2 = {
    fistname:"hats",
    Lastname:"donkey",
    Phone:"+927475675748",
    Eduaction:{
        edu:"9th Fail",
        reason:"Too much big brain pp",
        mainreason:"haad harami "
    },
    PrintSpecific : function(){
        return this.fistname+' '+this.Lastname ;
    }
}
console.log(ObjectConstructor2.PrintSpecific())

// a JavaScript function invoked using the new operator. Let's see how
// to create a constructor for the person object with an example

function person(){
    this.name="amen",
    this.City="lahore"
}

var johnSmith = new Person();
johnSmith.name = "John";
johnSmith.surname = "Smith";
var marioRossi = new Person();
marioRossi.name = "Mario";
marioRossi.surname = "Rossi";


// constructor can be defined with the use of diff keywords like "class" 


class person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
}
console.log("amen", 20);


const anotherperson = new person ('Alice' , 20);
console.log(anotherperson.name);
console.log(anotherperson.age);



function human (name,age,education,interest,favsong){
    this.name=name;
    this.age=age;
    this.education=education,
    this.interest=interest,
    this.favsong=favsong
}
console.log("amen",20,"uni","playing guitar","none");


let anotherhuman = new human("neena",30,"uni","cooking","none");
console.log(anotherhuman);


// example of methods and properties
let myobj ={
    name:'amen',
    class:'string',
    education:'string',
    anotherInfo: function(){
        return this.name+ " testing" + this.education;
    }
}
console.log(myobj.anotherInfo());

// example of object constructor 

let mynewobj = {
    name:'hats',
    class:'string',
    education:'string',
    fatherInfo:{
        name:'najam',
        fathername:'william',
        education:'string',
        phone:'+92090078061'
    }
}

let another = new mynewobj ('testing1' , 'testingno2');
console.log(this.fathername);
console.log(this.phone);


// object 
const person = {
    name:'amen',
    age:20,
    education:"University 2nd sem"
}
console.log(person);

// Object ProtoType

const Newperson ={
    number1:{
    name:"amen",
    class:"string",
    education:"ssting",
    age:'numeber',  
    },
   number2:{
    name:'string2',
    class:'string',
    education:'string',
    age:'number'
   }
}  

function anotherperson (name,surname,educaton){
    this.name=name,
    this.surname=surname,
    this.education=educaton
}

anotherperson.prototype.greeting  = function(){
    return "Good Evening" + this.name +this.surname+this.Eduaction;
}
const newone = new anotherperson ('amen','Najam','string');
console.log(newone.greeting());


// alert in object 
const x = {
    name:'amen',
    run : () =>{
        alert('here our alert')
    }
}
x__prototype__=x
x.run()
console.log(x)

//Classes

class Person {
    constructor(name,Age){
        this.name=name,
        this.Age=Age
    }
greet() {
    console.log("Hi" + "it's Me" + this.name + this.Age)
}
}

const person1 = new Person('amen', 30);
console.log(person1.greet())


class Amen {
    constructor(name,Age){
        this.name=name,
        this.Age=Age
    }
    greet(){
        return "sup" + "it'me" + this.name + "i'm" + this.Age + "years old"
    }
}

const xyz = new Amen ('Amen',21)
console.log(xyz.greet())



let result =[]
for(i=0;i<10;i++){
    if(i===8){
        result+=i
    }
}
console.log(result)

//example of block scope / global scope
let anotherresult;
for(i=0;i<3;i++){
    if(i===2){
       anotherresult = function(){
        return i;
       }
    }
}
console.log(anotherresult()); //output 2

// global scope

var anothertes;
for(var i=0 ; i<3 ; i++){
    if(i===2){
        anothertes = function(){
            return i;
        }
    }
}
console.log(anothertes()) //output 3

//prototype


function snowball (name,education,color){
   this.name=name;
   this.education=education;
   this.color=color;
   snowball.prototype.greet=function(){
    return "Good morning" + this.name + this.education + this.color + this.phone;
    }
}
const yz = new snowball ('amen','uni 2nd sem','black');
console.log(yz.greet());



function User(){
    this.name = 'amen',
    this.class = '13th',
    this.age = '21'
}
User.prototype.city='Lahore';

let newuser = new User()
console.log(newuser.city);

//mutate the array with the keyword const (mutate means to change the values of array)

const myvalues = [1,2,3,4,5];
myvalues[0]=2
myvalues[1]=4
myvalues[2]=5
myvalues[3]=10
myvalues[4]=11
myvalues[5]=20
console.log(myvalues);

// to prevent the mutation in function or object we use object.freeze

let obj = {
 name:"amen",
 Eduacation:"university"
}

Object.freeze(obj);
obj.age= '20';
obj.phone="90786606";
console.log(obj)

// here i'm not freezing the object and let's see the difference 
let newobj = {
    name:"string",
    class:"string"
}
// Object.freeze(newobj);
newobj.Age="23",
newobj.blahblah="string",
newobj[0]="hello world",
newobj[1]="matric"
console.log(newobj)
