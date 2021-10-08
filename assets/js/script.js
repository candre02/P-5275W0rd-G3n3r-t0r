// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*()";
var userChoices = "";
var characterPassword= "";

var passLength = parseInt(window.prompt("How many characters would you like in your password? (Choose between 8 and 128)"));
console.log("passlength", passLength)

var letterBig = window.confirm("Would you like upper case letters in your password?");
console.log("letterbig", letterBig)

var letterLittle = window.confirm("Would you like lower case letters in your password?");

var nums = window.confirm("Would you like numbers in your password?");

var specialChar = window.confirm("Would you like special characters in your password?");

if(passLength < 8 || passLength > 128){
  alert("Please choose a number between 8 and 128");
  return;
} else {

  if(letterBig === true){
    userChoices += upperCase; 
  }

  if(letterLittle === true){
    userChoices += lowerCase
  }

  if(nums === true){
    userChoices += numbers
  }

  if(specialChar === true){
    userChoices += specialCharacters
  }

  console.log("userchoices", userChoices)

  for(var i = 0; i < passLength; i++){

    var password = Math.floor(userChoices.length * Math.random())
    console.log("password", password)

    characterPassword += userChoices.charAt(password)
    console.log("characterPasswrod", characterPassword)


  }


}

 
  var passwordText = document.querySelector("#password");

  passwordText.value = characterPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);