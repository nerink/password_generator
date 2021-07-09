// Assignment Code
var generateBtn = document.querySelector("#generate");
// declare variables using array
const UpperCase_Char_Codes=arrayFromLowtoHigh(65,90)
const LowerCase_Char_Codes=arrayFromLowtoHigh(97,122)
const Number_Char_Codes=arrayFromLowtoHigh(48,57)
const Special_Char_Codes=arrayFromLowtoHigh(33,47).concat(
  arrayFromLowtoHigh(58,64)
).concat(
  arrayFromLowtoHigh (91,96)
).concat (
  arrayFromLowtoHigh(123.126)
)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Generate Criteria
function generatePassword(){
  let length= prompt('How long do you require your password to be?');
  let lowerCasePrompt=confirm('Do you want to include lowercase?');
  let upperCasePrompt=confirm('Do you want to include uppercase?');
  let specialCasePrompt=confirm(' Do you want to include special characters?');
/*Return Criteria
  return passwordCriteria (
    length,lowerCasePrompt,upperCasePrompt,specialCasePrompt
  )*/

  //if statement for min length character
/* if ( length>=8 && length<=128){
    return length,lowerCasePrompt,upperCasePrompt,specialCasePrompt
  } else {
    alert ('Please Try Again');*/

var superCharacterArray=[]
if (lowerCasePrompt === true ){
  var superCharacter= superCharacterArray.concat(LowerCase_Char_Codes)
} /*(upperCasePrompt === true){
  superCharacter=superCharacterArray.concat(UpperCase_Char_Codes)
}*/
console.log(superCharacter);

  }

//loop through total number of characters
function arrayFromLowtoHigh(low,high){
  const array=[]
  for(let i=low; i <=high; i++){
    var character= String.fromCharCode(i)
    array.push (character)
  }
  return array
}

//Ability to generate Random Number
function randomLowerChar() {
  return LowerCase_Char_Codes.charAt(Math.floor(Math.random() * LowerCase_Char_Codes.length));
}
function randomUpperChar() {
  return UpperCase_Char_Codes.charAt(Math.floor(Math.random() * UpperCase_Char_Codes.length));
}
function randomNumChar() {
  return Number_Char_Codes.charAt(Math.floor(Math.random() * Number_Char_Codes.length));
}
function randomSpecialChar() {
  return Special_Char_Codes.charAt(Math.floor(Math.random() * UpperCase_Char_Codes.length));
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
