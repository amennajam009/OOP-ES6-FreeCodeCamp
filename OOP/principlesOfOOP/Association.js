// Association in actual humy relation batata hai in between two or more then two independent objects in OOP 
// yeh indicate krta hai k ek class connected hai with other class without any ownership or dependency between them 



class Person{
    constructor(name){
        this.name=name
    }

    messagewanttogive(drive){
        return `${this.name} is Driving ${drive.car}`
    }
}
 class Drive{
    constructor(car){
        this.car=car
    }
 }

const amen = new Person('amen');
const bmw = new Drive('BMW');

amen.messagewanttogive(bmw)  //output will bt (amen is Driving BMW)


// as you can see here humri dono classes different han but still hum inko connect kr paa rhy han from another class 


 
//with 3 Classes
class MySelf {
    constructor(MyName){
        this.MyName=MyName
    }
    sentenceIwantToMake(othersName,advice){
        return `${this.MyName} Is Ready To Help ${othersName.nameofPerson} Cuz My Parents Teach Me To ${advice.pieceofAdvice} `
    }
}
class OtherPersonName {
    constructor(nameofPerson){
        this.nameofPerson=nameofPerson
    }
}
class Advice {
    constructor(pieceofAdvice){
        this.pieceofAdvice=pieceofAdvice
    }
}
const Amen = new MySelf('Amen');
const EveryOne = new OtherPersonName('Others');
const GoodAdvice = new Advice ('Help Others 🌸');

Amen.sentenceIwantToMake(EveryOne,GoodAdvice)





