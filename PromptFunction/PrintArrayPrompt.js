// In this function mai prompt may apni value dugi or woh uss value ko in array mjy return kryga

const Mypromptfunction = () =>{
    const number = parseInt(prompt('Enter Your Number'));
    const ResultArr = []
    if(!!number){
        for(let i=1; i<=number ; i++){
            ResultArr.push(i);
        }
        return ResultArr;
    }
    else{
        return 'Please Enter Valid Number'
    }
}

const PromptFunction = Mypromptfunction();
console.log(PromptFunction);









// again for pratice 
const AgainPromptfunction = () =>{
    const number = parseInt(prompt('Enter Your Number'));
    const Result = []
    if(!!number){
        for(let i=0; i<=number;i++){
            Result.push(i);
        }
        return Result
    }
    else{
        return 'Enter Valid Number'
    }
}

const printmyarr = AgainPromptfunction();
console.log(printmyarr)