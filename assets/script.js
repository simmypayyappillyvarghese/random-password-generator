// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


/*
Generate random password based on the user provided criteria.

-fn: getValidatedInput return a isValidInput :flag specifying if its a valid input
along with all other input values in an array.

-fn:generateRandomPass will generate password if user enters valid input criteria
else display error message .
*/

function generatePassword(){

var [isValidInput,passwordLength,havUpperCharacter,havLowerCharacter,havNumericCharacter,havSpecialCharacter]=getValidatedInput();


if(isValidInput){
    var newPassword=generateRandomPass(passwordLength,havUpperCharacter,havLowerCharacter,havNumericCharacter,havSpecialCharacter);
    return newPassword;
}
else{
  return "Password cannot be generated.Please enter valid input";
}

}



/*
Accept user response on password length(between 8-128),if it should have upper case,lower case 
numerical character or special character.
*/

function getValidatedInput(){

var isValidInput=true;
var passwordLength=prompt("How long should be the new password ? \n \n (Min Length:8 and Max Length:128)");

console.log();
//Validate password length-Should have a value between 8 and 128,if not set the isValidInput flag as false and return value.

if(isNaN(passwordLength) || ( passwordLength<8 || passwordLength>128 )){
  
  alert("Invalid length.\n Please enter a valid length between 8 and 128 characters");
  isValidInput=false;
  return[isValidInput];
}

//Accept the character type criteria for password

var havUpperCharacter=confirm("Should  the password include upper case character");
var havLowerCharacter=confirm("Should  the password include lower case character");
var havSpecialCharacter=confirm("Should  the password include special character");
var havNumericCharacter=confirm("Should  the password include numeric character");


//Validate if user chose any character typr if not alert error message else return the response in array.

 if(!havUpperCharacter && !havLowerCharacter && !havSpecialCharacter && !havNumericCharacter){

    alert("Invalid Response.Password should include atleast one character type (lower case,upper case,numeric or special character)");
    isValidInput=false;
    return[isValidInput];
   
}

    return [isValidInput,passwordLength,havUpperCharacter,havLowerCharacter,havNumericCharacter,havSpecialCharacter];
  

}


/*Function checks the user criteria and based on that create arrays
and Math.random is used to randomnly pick the characters and return it as a string*/

function generateRandomPass(passwordLength,havUpperCharacter,havLowerCharacter,havNumericCharacter,havSpecialCharacter){

  var newPassword="";
  var finalArray=[];

  if(havUpperCharacter){
    var upperCharacterArray="abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');
    finalArray=finalArray.concat(upperCharacterArray);
   }
  
   if(havLowerCharacter){
    var lowerCharacterArray="abcdefghijklmnopqrstuvwxyz".split('');
    finalArray=finalArray.concat(lowerCharacterArray);
   }
   if(havSpecialCharacter){
    var specialCharString=" !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split('');
    finalArray=finalArray.concat(specialCharString);
   }
   
  if(havNumericCharacter){
    var numericArray=[0,1,2,3,4,5,6,7,8,9];
    finalArray=finalArray.concat(numericArray);
  }
  
   while(newPassword.length<passwordLength){
  
    newPassword+=finalArray[Math.floor(Math.random()*finalArray.length)];

   }
   return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
