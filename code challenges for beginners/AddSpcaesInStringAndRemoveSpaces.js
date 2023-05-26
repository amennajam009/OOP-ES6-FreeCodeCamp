//To Remove Spaces From  String
function removeSpaces(str) {
    return str.replace(/\s/g, "");
  }
  
  // Example usage
  const sentence = "This is a sample sentence.";
  const stringWithoutSpaces = removeSpaces(sentence);
  console.log(stringWithoutSpaces);


  //To Add Spaces From String

  function addSpaces(str) {
    return str.split("").join(" ");
  }
  
  // Example usage
  const word = "hello";
  const stringWithSpaces = addSpaces(word);
  console.log(stringWithSpaces);