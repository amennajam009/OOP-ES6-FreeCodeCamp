//Print Tables from 1 to 10
for(let i=1;i<=10;i++){
    printTable(i)
}

function printTable(n){
    for(let i=1;i<=10;i++){
        let Tablerow = n + 'X' + i + '=' + n*i;
        console.log(Tablerow);
    }
}
printTable()