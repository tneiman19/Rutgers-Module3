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

var generatePassword = function () {
  var passwordCriteria = {
    passwordLength: 0,
    includeLowercase: false,
    includeUppercase: false,
    includeNumeric: false,
    includeSpecial: false,
  };

  while (
    passwordCriteria.passwordLength < 8 ||
    passwordCriteria.passwordLength > 128
    //add logic to make sure a number was entered
  ) {
    passwordCriteria.passwordLength = Math.floor(
      parseFloat(prompt("Enter password length\n(Between 8-128 charecters)"))
    );
  }
  if (!passwordCriteria.passwordLength) {
    return "error: Password generator canceled by user";
  } else {
    // Ask user if we should include lowercase letters
    passwordCriteria.includeLowercase = confirm(
      "Do you want to include lowercase letters in your password?"
    );
    // Ask user if we should include uppercase letters
    passwordCriteria.includeUppercase = confirm(
      "Do you want to include uppercase letters in your password?"
    );
    // Ask user if we should include numbers
    passwordCriteria.includeNumeric = confirm(
      "Do you want to include numbers in your password?"
    );
    // Ask user if we should include special characters
    passwordCriteria.includeSpecial = confirm(
      "Do you want to include lowercase letter in your password?"
    );
  }

  if (
    !passwordCriteria.includeLowercase &&
    !passwordCriteria.includeUppercase &&
    !passwordCriteria.includeNumeric &&
    !passwordCriteria.includeSpecial
  ) {
    alert("error: You must select at at lease 1 charecter type!");
    generatePassword();
  } else alert("Working On It!");
  return "Working on it!";
};
