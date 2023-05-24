
//In JavaScript, both classes and functions can be used to create objects and define object behavior.
// The choice between using classes or functions depends on your coding style, the complexity of your code,



// yeh actually humra concept hai OOP ka with the use of classes 
//we can apply 3 principles yeh humra way hai to create obj hum icsy apna object bana sakty han jesy hum function sy banatay thy
//syntax 
class MyObject {
 constructor(name){
    this.name = name
 }
}

const newobj = new MyObject ('amen');
console.log(newobj.name)


//by using classes we can directly use our constructor in our class object in which this or new keyword are already invoked