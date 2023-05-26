//WhenEver I write Any number in my Prompt so it should print Out the whole Table

const MymultiplyPromptFunction = () =>{
    const EnterNumber = parseInt(prompt('Enter Your Number'));
    let Result =''
    for(let i=1;i<=10;i++){
        let RowOfTable = EnterNumber + 'X' + i + '=' + EnterNumber*i;
        Result+=RowOfTable+'\n';
        }
        return Result
}
console.log(MymultiplyPromptFunction());