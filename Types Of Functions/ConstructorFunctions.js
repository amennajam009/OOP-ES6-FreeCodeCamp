//constructor function humry woh functions hoty han jo k this or new keywords sy banye jty han or humra jo contructor
//ka function hota hai uska variable ke name ka first letter humesha capital he retha hai 

function Person() {
    this.name = "amen";
    this.age = "20";
    this.job = "unemployed lol :D";
}

Person.prototype.city = 'lahore';

const newperson = new Person();

console.log(newperson.name);
console.log(newperson.age);
console.log(newperson.job);
console.log(newperson.city);