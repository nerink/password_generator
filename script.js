// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// declare variables 
let lowerCharacter = "abcdefghijklmnopqrstuvwxyz";
let upperCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberCharacter = "0123456789";
let specialCharacter = "@#$%^&*()_+[]<>?{}-=/";

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
  // Create input for the password 
  function passwordCriteria (lengthPrompt,lowerCasePrompt,upperCasePrompt,numbersPrompt,specialCasePrompt){
    let pwd='';
  // Create new integar which can define how many character have currently been used
    let usedCharacter =0;
  // create for loop through total number of characters
  for(let i=0; i <=lengthPrompt; i++){
  //check to see if the criteria is true & to confirm we dont use more character than specified by the user
    if (lowerCasePrompt === true && usedCharacter< lengthPrompt ){
      pwd += randomLowerChar();
      usedCharacter++;
    } if (upperCasePrompt === true && usedCharacter< lengthPrompt){
      pwd += randomUpperChar();
      usedCharacter++;
    }if (specialCasePrompt === true && usedCharacter< lengthPrompt){
      pwd += randomSpecialChar();
      usedCharacter++;
    }if (numbersPrompt === true && usedCharacter< lengthPrompt){
      pwd += randomNumChar();
      usedCharacter++;
    }
  }
  return pwd
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

}
    
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

