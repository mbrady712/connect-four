'use client'

import { useRouter } from 'next/navigation';
import { useState } from "react";


export default function LoginForm (){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameErrors, setUsernameErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [path, setPath] = useState("");

  const router = useRouter();

  function handleUsername(e){
    setUsername(e.target.value)
  }

  function handlePassword(e){
    setPassword(e.target.value)
  }

  function validateUsername(username){
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

  function validatePassword(password){
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

  function handleSubmit(e){

  e.preventDefault()
  //Client side validation and cleaning
  var usernameErrors = validateUsername(username);
  var passwordErrors = validatePassword(password);
  console.log(passwordErrors)
  setUsernameErrors(usernameErrors);
  setPasswordErrors(passwordErrors);

  if(usernameErrors.length === 0 && passwordErrors.length === 0){
    router.push("../playGame");
  }

  //Send data to API endpoint
    var formData = {
      "username":username,
      "password":password
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label htmlFor="fname">Username</label><br/>
      <input type="text" id="fname" name="fname" onChange={handleUsername}/><br/>
      {usernameErrors.map((error, index) => (<div className="error" key={index}>{error}</div>))}
      <label htmlFor="lname">Password</label><br/>
      <input type="password" id="lname" name="lname" onChange={handlePassword}/><br/>
      {passwordErrors.map((error, index) => (<div className="error" key={index}>{error}</div>))}
      <input type="submit" id="submit" name="submit" value="Login"/>
    </form>
  );
}

