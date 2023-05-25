// Whenever i Enter  Even Value in prompt so it should give me output in Boolean


const MyBooleanfunction = () =>{
    const number = parseInt(prompt('Enter Your Number'));

  return  (number%2===0)? true + 'Number Is Even': false + 'Number Is Not Even It Is Odd';
}
console.log(MyBooleanfunction())