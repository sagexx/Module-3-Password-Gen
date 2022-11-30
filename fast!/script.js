var characterLength = 10;
var choiceArray = [];
var specialCharArray = ['$','!','*','&','%','?','@','%',']'];
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArray = ['1','2','3','4','5','6','7','8','9','0']; 
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
    var correctPrompts = getPrompts();

    if(correctPrompts){
        var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword;
    } else {
        passwordTest.value = "";
    }
    

}

function generatePassword() {
    var password = "";
    for(var i = 0; i < characterLength; i++){
        var randomIndex = Math.floor(Math.random() * choiceArray.length)
        password = password + choiceArray[randomIndex];
    }
    return password;

}
function getPrompts(){
    choiceArray = [];

    characterLength = parseInt(prompt("How many characters would you like your password to be?"));

    if(isNaN(characterLength) || characterLength < 10 || characterLength > 128) {
        alert("Character length has to be a number, 10-128 digits.");
        return false;
    }

     if (confirm("Would you like lowercase letters in your password?")){
        choiceArray = choiceArray.concat(lowerCaseArray);
     }
     if (confirm("Would you like uppercase letters in your password?")){
        choiceArray = choiceArray.concat(upperCaseArray);
     }
     if (confirm("Would you like special characters in your password?")){
        choiceArray = choiceArray.concat(specialCharArray);
     }
     if (confirm("Would you like numbers in your password?")){
        choiceArray = choiceArray.concat(numberArray);
     }
     return true;
}

