// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  var spchar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  var lowalph = "abcdefghijklmnopqrstuvwxyz"
  var uppalph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
  
  for (var i = 0; i < 10; i++) {
    var num = Math.floor(Math.random()*9);
    console.log(num);
  } 
  
  passwordText.value = password;



}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
