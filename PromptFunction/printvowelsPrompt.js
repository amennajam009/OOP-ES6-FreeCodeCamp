  //Testing promt in which i enter string and it will return me how many vowel words i have in my sentence

  const Mypromtfunction = (str) =>{
    const EnterString = prompt('Enter Your String');
    const vowels = ['a','e','i','o','u']
    let ResultOfString = 0;
    for(let char of EnterString.toLowerCase()){
        if(vowels.includes(char)){
            ResultOfString++;
        }
    }
    return ResultOfString
}
const showtheresult = Mypromtfunction();
console.log(`The String  has ${showtheresult} vowels`)