//Return the Number Of Vowels In a string 

const MyString = (str) =>{
 const vowels = ['a','e','i','o','u'];
 let vowelsCount = 0;

 for(let char of str.toLowerCase()){
    if(vowels.includes(char)){
        vowelsCount++;
    }
 }
 return vowelsCount;

}
const sentence = "hello, My Name is Amen ";
const vowelResult = MyString(sentence);
console.log(`The sentence "${sentence}" contains ${vowelResult} vowels`)



//again pratice 

const Mynewstringfunction = (str) => {
    const myString = ['a', 'e', 'i', 'o', 'u'];
    let ResultOfString = 0;
    for (let char of str.toLowerCase()) {
      if (myString.includes(char)) {
        ResultOfString++;
      }
    }
    return ResultOfString;
  }
  
  const Mysentence = 'Hi, Here we are Testing Our sentence';
  const testingresults = Mynewstringfunction(Mysentence);
  console.log(`This Testing Sentence contains ${testingresults} vowels.`);



  