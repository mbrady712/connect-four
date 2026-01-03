export function validateEmail(email) {
  var error = ""
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if(!emailRegex.test(email)){
    error = "Email is not valid"
  };

  return error;
}

export function validateUsername(username){
    var errors = [];

    if(username === ""){
      errors.push("Username cannot be empty");
    }
    
    if(username.length < 8){
      errors.push("Username must be at least 8 characters long");
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

    return errors;
  }

  function containsOnlyNumbers(code){
    return /^\d+$/.test(code);
  }

  export function validateCode(code){
       var errors = [];

    if(code === ""){
      errors.push("Secure code cannot be empty");
    }
    
    if(code.length != 6){
      errors.push("Secure code is exactly six numbers");
    }

    if(!containsOnlyNumbers(code)){
      errors.push("Secure code consists of numbers only");
    }

    return errors;
  }