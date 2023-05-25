


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




//what if i want to print odd numbers 

const PrintOddNumber = () =>{
    const number = parseInt(prompt('Enter Your Number'));
    const Result = []
    if(!!number){
        for(i=0;i<=number;i++){
            if(i%2 !==0){
                Result.push(i)
            }
        }
        return Result
    }
    else{
        return 'Enter Valid Number'
    }
}
console.log(PrintOddNumber())




//again pratice

const mypraticefunction = () =>{
    const  number = parseInt(prompt('Enter Your Number'));
    const Result =[]
    if(!!number){
        for(i=0;i<=number;i++){
            if(i%2==0){
                Result.push(i)
            }
        }
        return Result
    }
    else{
        return "Enter Valid NUMBER"
    }
 }
 console.log(mypraticefunction());