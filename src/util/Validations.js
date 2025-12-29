export function validateUsername(username){
    var errors = [];

    if(username === ""){
      errors.push("Username cannot be empty");
    }
    
    if(username.length < 8){
      errors.push("Username must be at least 8 characters long");
    }

    if(errors.length == 0){
      errors = [];
    }

    return errors;
}

function checkLowercase(str){
    return /[a-z]/.test(str);
  }

   function checkUppercase(str){
    return /[A-Z]/.test(str);
  }

  function hasNumber(str) {
    return /\d/.test(str);
  }

  function containsSpecialChars(str) {
    const specialCharsRegex = /[^\p{L}\p{N}\s]/u; 
    return specialCharsRegex.test(str);
  }

  export function validatePassword(password){
    var errors = [];

    if(password === ""){
      errors.push("Password cannot be empty")
    }
    
    if(password.length < 16){
      errors.push("Password must be at least 16 characters long")
    }
    
    if(!(checkLowercase(password) && checkUppercase(password))){
      errors.push("Password must contain a mix of lowercase and uppercase letters")
    }

    if(!hasNumber(password)){
      errors.push("Password must contain at least one number")
    }

    if(!containsSpecialChars(password)){
      errors.push("Password must contain at least one special character")
    }

    if(errors.length == 0){
      errors = [];
    }

    return errors;
  }