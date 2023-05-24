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

