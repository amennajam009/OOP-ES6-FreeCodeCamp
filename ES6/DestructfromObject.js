// we can destruct our value from our object too

const Myobj = {
    name: 'amen',
    class: 'university',
    Age: '20',
    phone: '93727595',
    email: 'amen@gmail.com',
    value1: 20,
    value2: 10
};

const newfunction = () => {
    const { value1, value2 } = Myobj;
    const sum = value1 + value2;
    return sum;
};

console.log(newfunction());

//again


const mydiffObj = {
    name: 'amen',
    class: 'university',
    Age: '20',
    phone: '93727595',
    email: 'amen@gmail.com',
    value1: 50,
    value2: 30
}

const myfunction = () =>{
    const {value1,value2} = mydiffObj;
    const sum = value1+value2
    return sum;
}
console.log(myfunction())
   
//again 2

const myanotherdiffobj =  {
    name: 'amen',
    class: 'university',
    Age: '20',
    phone: '93727595',
    email: 'amen@gmail.com',
    value1: 50,
    value2: 30
}

const mynextfunction = () =>{
    const {value1,value2} = myanotherdiffobj;
    const multiply = value1*value2
    return multiply;                  
}
console.log(mynextfunction())                  


