// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var spchar = ["!#$%^&*()?/\=+"]
var lowalph =["abcdefghijklmnopqrstuvwxyz"]
var uppalph =["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var numbers =["0123456789"]


  function generatePassword(){
  //  Character Length question
      var developPassword =[]
      var passwordLength = prompt("How many characters do you want for you password? Note: Must be between 8 to 128.");
      if (passwordLength > 7 && passwordLength < 129) {
        console.log(passwordLength);
      } 
      else {
        alert("Choose a length that is between 8 to 128 characters");
        console.log(passwordLength);
        generatePassword ();
      }
    
      //Password Upper Case question
      var passwordUpper = confirm("Do you want upper case letters in your password?");
      if (passwordUpper) {
        developPassword+=uppalph;
        console.log(developPassword);
      }
      
      

      //Password Lower Case question
      var passwordLower = confirm("Do you want lower case letters in your password?");
      if (passwordLower) {
        developPassword+=lowalph;
        console.log(developPassword);
      }
      

      //Password Upper Case question
      var passwordSpecial = confirm("Do you want special characters in your password?");
      if (passwordSpecial) {
        developPassword+=spchar;
        console.log(developPassword);
      }
      

      //Password Number question
      var passwordNumber = confirm("Do you want numbers in your password?");
      if (passwordNumber) {
        developPassword+=numbers;
        console.log(developPassword);
      }
      

      //check if user chose at least one character type
      if (developPassword ===""){
      alert("You must include at least one character type");
      generatePassword();
      }
  

  //create the password user sees with all the inputs compiled above in variable
    var num="";
    for (var i = 0; i < passwordLength; i++) {
      num += developPassword.charAt(Math.floor(Math.random()*developPassword.length));
      console.log(num);
    }
    return num;
  }

  
  /* another avenue i tried going down that ulimately failed but i still wanted
  to include it for my own records if i ever go back later.

  var spchar = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","["]
  var lowalph = ["a","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppalph = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var numbers = ["0","1","2","3","4","5","6","7","8","9"]
  var developPassword = ""
*/
/*
function grabvar (arr){
i=0;i<arr.length;i++;
var arr = Math.floor(Math.random() * arr.length) + 1;
}
grabvar(spchar)
*/
  
  







