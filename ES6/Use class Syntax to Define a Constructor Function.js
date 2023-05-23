//In ES5 hum constructor banane k liye ek function bantay thy or usmay this or new keywords use krty thy lemme show you 

function Person(name,age){
    this.name=name,
    this.agea=age
}

const person1 = new Person('amen',20);
console.log(person1.name);
console.log(person1.age);

// But now we can call our constructor Within Our class in which there is already new keyword nd this keyword invoked

class Person2 {
    constructor(name){
        this.name=name
    }
}
const NewPerson2 = new Person2('carrot');
console.log(NewPerson2.name)