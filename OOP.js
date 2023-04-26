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

  number1.greetings = function(){
    return "Good Evening" +  this.name + this.education;
}
console.log(Newperson);