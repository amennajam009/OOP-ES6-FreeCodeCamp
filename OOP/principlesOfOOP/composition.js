//Composition is a principle in object-oriented programming (OOP) 
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
 