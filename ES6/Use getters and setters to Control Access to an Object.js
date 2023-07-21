//You can obtain values from an object and set the value of a property within an object.

class MyObj {
    constructor(name,age,education){
        this.name = name,
        this.age = age,
        this.education=education
    }

    get name(){
        return this.name
    }

    set name(newName){
        if(newName === 'string'){
            this.name = newName
        }
        else{
            return 'please enter string'
        }
    }
}

const myvalues = new MyObj('amen',20,'intermediate');
console.log(myvalues.name());


