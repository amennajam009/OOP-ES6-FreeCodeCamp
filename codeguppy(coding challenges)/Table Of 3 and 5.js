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