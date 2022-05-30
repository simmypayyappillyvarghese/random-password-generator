// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

/*Generate random password based on the user provided criteria.*/

function generatePassword(){

var passwordLength,havUpperCharacter,havLowerCharacter,havNumericCharacter,havSpecialCharacter=getValidatedInput();

console.log(passwordLength,havUpperCharacter,havLowerCharacter,havNumericCharacter,havSpecialCharacter);

}



/*
Accept user response on password length(between 8-128),if it should have upper case,lower case 
numerical character or special character.
*/
function getValidatedInput(){

var passwordLength=prompt("How long should be the new password ? \n \n (Min Length:8 and Max Length:128)");

if(!passwordLength || passwordLength<8 || passwordLength>128){
  
  alert("Invalid length.\n Please enter a valid length between 8 and 128 characters");
  return;
}




//Validate the user input.


var havUpperCharacter=confirm("Should  the password include upper case character");
var havLowerCharacter=confirm("Should  the password include lower case character");
var havSpecialCharacter=confirm("Should  the password include special character");
var havNumericCharacter=confirm("Should  the password include numeric character");

 if(havNumericCharacter || havlowerCharacter || havSpecialCharacter || havNumericCharacter){

    alert("Invalid Response.Password should include atleast one character type (lower case,upper case,numeric or special character)");
}
else{

    return [passwordLength,havUpperCharacter,havLowerCharacter,havNumericCharacter,havSpecialCharacter];
  
}


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
