// Assignment Code
var generateBtn = document.querySelector("#generate");
// declare variables using array
let lowerCharacter = "abcdefghijklmnopqrstuvwxyz";
let upperCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberCharacter = "0123456789";
let specialCharacter = "@#$%^&*()_+[]<>?{}-=/";
let combinedCharacterArray=[]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Generate Criteria
function generatePassword(){
  let lengthPrompt= prompt('How long do you require your password to be?');
  if (lengthPrompt < 8 || lengthPrompt > 128){
    alert ('Please enter a number between 8-128');
  } else {
  let lowerCasePrompt=confirm('Do you want to include lowercase?');
  let upperCasePrompt=confirm('Do you want to include uppercase?');
  let numbersPrompt=confirm('Do you want to include number?');
  let specialCasePrompt=confirm(' Do you want to include special characters?');

  //Return Criteria
  return passwordCriteria (
    lengthPrompt,lowerCasePrompt,upperCasePrompt,specialCasePrompt,numbersPrompt
  );
  }

// create for loop through total number of characters
/*function {
  const array=[]
  for(let i=0; i <=??; i++){
    var character= String.fromCharCode(i)
    array.push (character)
  }

  return array
}*/
if (lowerCasePrompt === true ){
  //add an lowercase letter to the password 
  // add the lower case array to the superarray
   let superArray=combinedCharacterArray.concat(lowerCharacter)
} if (upperCasePrompt === true){
  superArray =combinedCharacterArray.concat(upperCharacter)
}if (specialCasePrompt === true){
  superArray=combinedCharacterArray.concat(specialCharacter)
}if (numbersPrompt === true){
  superArray=combinedCharacterArray.concat(numberCharacter)
}
console.log(superArray);
console.log ('hi');
}


//Ability to generate Random Number
function randomLowerChar() {
  return lowerCharacter.charAt(Math.floor(Math.random() * lowerCharacter.length));
}
function randomUpperChar() {
  return upperCharacter.charAt(Math.floor(Math.random() * upperCharacter.length));
}
function randomNumChar() {
  return numberCharacter.charAt(Math.floor(Math.random() * numberCharacter.length));
}
function randomSpecialChar() {
  return specialCharacter.charAt(Math.floor(Math.random() * specialCharacter.length));
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
