// (Polymorphism) poly = many , Morphism = Forms 
// Extend Keyword is used to maintain the inheritance between the classes cuz Animal is our Parent Class nd the extend One are the Child classes of Animal
class Animal{
    constructor(name){
        this.name=name
    }
    //method
    makeSound(){

    }
}

class Dog extends Animal{
  makeSound(){
    return 'Bow Bow'
  }
}

class Cat extends Animal{
    makeSound(){
        return 'Meow Meow'
    }
}

class Duck extends Animal{
    makeSound(){
        return 'Quack Quack'
    }
}

const dog = new Dog ('Dog');
const cat = new Cat ('Cat');
const duck = new Duck('Duck');

//polymorphism
const animals = [dog,cat,duck];

for(let animal of animals){
    console.log(animal.name+':'+animal.makeSound())
}