// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(arr) {
  var password = generatePassword(arr);
  var passwordText = document.querySelector("#password");
  
  var spchar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  var lowalph = "abcdefghijklmnopqrstuvwxyz"
  var uppalph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for (var i = 0; i < 1; i++) {
    var num = Math.floor(Math.random()*10);
    console.log(num);
    
  }

  //  Character Length question
  var passwordLength = prompt("How many characters do you want for you password? Note: Must be between 8 to 128.") 
  if (passwordLength > 7 && (passwordLength < 129)) {
    console.log(passwordLength);
  } else {alert("Choose a length that is between 8 to 128 characters");
    main() }
 

  //Password Upper Case question
  var passwordUpper = confirm("Do you want upper case letters in your password?");
  if (passwordUpper) {
    console.log(upper)
  };

  //Password Lower Case question
  var passwordLower = confirm("Do you want lower case letters in your password?");
  if (passwordLower) {
    console.log(lower)
  };

  //Password Upper Case question
  var passwordSpecial = confirm("Do you want special characters in your password?");
  if (passwordSpecial) {
    console.log(symbol)
  };

  //Password Number question
  var passwordNumber = confirm("Do you want numbers in your password?");
  if (passwordNumber) {
    console.log(num)
  };
  function questions(quest){

  }
  passwordText.value = password;
  
  } 
  
  






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
