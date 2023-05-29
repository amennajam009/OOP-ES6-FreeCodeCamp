//whenever i enter number so it must reverse the string

const MyReverseFunction = () =>{
    const EnterYourString = prompt('Enter Your String');
    let String = '';
    String = EnterYourString.split('').reverse().join('');
    return String
}
console.log(MyReverseFunction())