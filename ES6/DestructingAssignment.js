//Destructing assignment humra ek special type ka syntax hai jisy hum directly object may sy he values pakr saktay han 


const MyObj = {
    name:'amen',
    Today:'19th may 2023',
    temperature:'Hot'
}
const {Today,temperature} = MyObj;
console.log(MyObj);

//Destructing Values from nested Object 
const MySecondObj = {
    Name:'amen',
    Class:'university',
    TodayWeather:'Hot',
    TomorrowWeather:'Sunny'
}
const {TodayWeather:{TodayWeather:low , TomorrowWeather:high}}=MySecondObj
console.log(MySecondObj);

//Nested One 
const MyObjNo2 = {
    myinfo:{
        name:'amen',
        class:'13th',
        phone:'090078601'
    },
    fatherInfo:{
        fathername:'najam',
        fathersurname:'william',
        phone:'08968565',
        country:'pakistan'
    },
    brotherInfo:{
        name:'string',
        education:"string",
        phone:'3456356466',
        country:'pakistan',
        city:'lahore',
        greet:function(){
          return "hello my name is " + this.name;
        }
    }
}
const {name:{name:Allname, education:Alleducation}}= MyObjNo2;
console.log(MyObjNo2.brotherInfo.greet());
console.log(Allname);
console.log(Alleducation);