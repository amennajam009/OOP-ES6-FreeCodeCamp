//EXPLANINATION 1 //Composition is a strong type of Aggregation, where each component object has no
//independent life without its owner, the aggregate



var person = {name: "John",
 surname: "Smith",
 address: {
 street: "123 Duncannon Street",
 city: "London",
 country: "United Kingdom"
 }};

//This code defines a person with his address represented as an object. The address property
//is strictly bound to the person object. Its life is dependent on the life of the person and it
//cannot have an independent life without the person. If the person object is deleted, also the
//address object is deleted.


//------------------------------------------------------------------------------------------------------------------------


//EXPLANINATION 2//Composition is a principle in object-oriented programming (OOP) 
//that allows objects to be composed or constructed using other objects. 
//It is a way of combining simple or complex objects to create more 
//complex objects or systems.


class Engine {
    start() {
      console.log('Engine started.');
    }
  
    stop() {
      console.log('Engine stopped.');
    }
  }
  
  class Car {
    constructor() {
      this.engine = new Engine(); // Composition: Car has an Engine
    }
  
    startCar() {
      this.engine.start();
    }
  
    stopCar() {
      this.engine.stop();
    }
  }
  
  const myCar = new Car();
  myCar.startCar(); // Output: "Engine started."
  myCar.stopCar(); // Output: "Engine stopped."
 