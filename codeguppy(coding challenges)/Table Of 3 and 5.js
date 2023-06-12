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