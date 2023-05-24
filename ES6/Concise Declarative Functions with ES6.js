// phly jb hum Apny Object k ander method pass karwty thy toh usmay hum function keyword use krty thy lemme show you one example

const Person ={
    name:'random',
    class:'random',
    education:'random',
    greeting : function(){
        return `Hi my name is ${Person.name} `
    }
}
console.log(Person.greeting());
// yeh humra ES5 ka concept thaa 

// ES6 may we can remove this keyword and colon hum direct apna method use krsakty han apny object may 

const AnotherPerson = {
    name:'string',
    class:'stirng',
    phone:'string',
    greeting (){
        return `Yoo sup here's my ${AnotherPerson.phone}`
    }
}
console.log(AnotherPerson.greeting());


//for pratice 
const practicefunction = {
    country:'pak',
    city:'...',
    phone:'...',
    education:'...',
    greet(){
     return `hey i'm from ${practicefunction.country}`
    }
}
console.log(practicefunction.greet())