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

var lowercaseFields = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseFields = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericFields = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialFields = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", "|", ":", ";", "'", '"', "<", ">", ".", "?", "/"];
var selectedFields = [];

var passwordCriteria = {
  passwordLength: 0,
  includeLowercase: false,
  includeUppercase: false,
  includeNumeric: false,
  includeSpecial: false,
};

var generatePassword = function () {
  while (
    passwordCriteria.passwordLength < 8 ||
    passwordCriteria.passwordLength > 128
    //add logic to make sure a number was entered
  ) {
    passwordCriteria.passwordLength = Math.floor(parseFloat(prompt("Enter password length\n(Between 8-128 charecters)")));
  }
  if (!passwordCriteria.passwordLength) {
    return "error: Password generator canceled by user";
  } else {
    // Ask user if we should include lowercase letters
    passwordCriteria.includeLowercase = confirm("Do you want to include lowercase letters in your password?");

    if (passwordCriteria.includeLowercase) {
      selectedFields = [...selectedFields, ...lowercaseFields];
    }

    // Ask user if we should include uppercase letters
    passwordCriteria.includeUppercase = confirm("Do you want to include uppercase letters in your password?");

    if (passwordCriteria.includeUppercase) {
      selectedFields = [...selectedFields, ...uppercaseFields];
    }

    // Ask user if we should include numbers
    passwordCriteria.includeNumeric = confirm("Do you want to include numbers in your password?");

    if (passwordCriteria.includeNumeric) {
      selectedFields = [...selectedFields, ...numericFields];
    }

    // Ask user if we should include special characters
    passwordCriteria.includeSpecial = confirm("Do you want to include special characters in your password?");

    if (passwordCriteria.includeSpecial) {
      selectedFields = [...selectedFields, ...specialFields];
    }
  }

  if (!passwordCriteria.includeLowercase && !passwordCriteria.includeUppercase && !passwordCriteria.includeNumeric && !passwordCriteria.includeSpecial) {
    return "error: You must select at at lease 1 charecter type!";
  }
  return "Working on it!";
};
