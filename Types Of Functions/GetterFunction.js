//Getter Functions: Getter functions, also known as accessor functions, are methods defined within an object that allow you to access the object's properties.
// They are defined using the get keyword and do not require explicit invocation when accessed.
// Getter functions are useful when you want to perform some calculations or 
//transformations on the property value before returning it. Here's an example

const rectangle = {
    width: 10,
    height: 5,
    get area() {
      return this.width * this.height;
    }
  };
  
  console.log(rectangle.area); // Output: 50