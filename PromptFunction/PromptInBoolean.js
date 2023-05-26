// Whenever i Enter  Even Value in prompt so it should give me output in Boolean


const MyBooleanfunction = () =>{
    const number = parseInt(prompt('Enter Your Number'));

  return  (number%2===0)? true + 'Number Is Even': false + 'Number Is Not Even It Is Odd';
}
console.log(MyBooleanfunction())

//Whenever i Enter Negative Number In my prompt so it will return me that the Number you entered is Negative : positive
const MyPositiveNegativenumber = () =>{
  const EnterNumber = parseInt(prompt('Enter Your Number'));
  return (EnterNumber<0)? 'The Number you Entered is Negative' : 'The Number You Entered Is Positive'
}
console.log(MyPositiveNegativenumber())
