


const PrintEvenNumber=()=>{
    const number = parseInt(prompt('Enter Your Number'));
    const Result = []
     if(!!number){
        for(i=0;i<=number;i++){
            if(i%2==0){
               Result.push(i)
            }
        }
        return Result
     }
     else{
        return "Enter Valid Number"
     }

}
console.log(PrintEvenNumber());



