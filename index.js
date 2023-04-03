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










