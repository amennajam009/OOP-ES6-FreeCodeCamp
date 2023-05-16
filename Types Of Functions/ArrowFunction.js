
let MyValue = (value1,value2) =>{
    try {
        if(value1===value2){
            return true;
        }
        else{
            return false;
        }
    } catch (error) {
        
    }
}
console.log(MyValue(20,20));