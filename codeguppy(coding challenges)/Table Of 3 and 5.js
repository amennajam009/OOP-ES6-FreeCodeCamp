// Table of 3 and 5

const Myfunction = (table) =>{
    let Result = ''
    for(let i=1 ; i<=10 ; i++){
        const TableRow = table + 'X' + i + '=' + table*i;
        Result += TableRow + '\n'
    }
    return Result;
}
console.log(Myfunction(3))

// Table if 5
const MysecondFunction = (table) =>{
 let Result = ''
 for(let i=1 ; i<=10 ; i++){
    const TableRow = table + 'x' + i + '=' + table*i
    Result += TableRow + '\n' 
 }
 return Result
}
console.log(MysecondFunction(5))

// For Pratice purpose Only 

const MyPromptFunction = () =>{
    const MyNumber = parseInt(prompt('Enter Your Numer'));
    let Result = ''
    for(let i=1 ; i<=10 ; i++){
        const TableRow = MyNumber + 'x' + i + '=' + MyNumber*i
        Result += TableRow + '\n'
    }
    return Result
}
console.log(MyPromptFunction())