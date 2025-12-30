'use client'

import Link from "next/link";
import { useState } from "react";
import { validateUsername } from '../../util/Validations';
import { validatePassword } from '../../util/Validations'
import { validateEmail } from '../../util/Validations'

export default function CreateAccount (){
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameErrors, setUsernameErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);

  function handleEmail(e){
    setEmail(e.target.value)
  }

  function handleUsername(e){
    setUsername(e.target.value)
  }

  function handlePassword(e){
    setPassword(e.target.value)
  }

  function handleSubmit(e){

  e.preventDefault()
  //Client side validation and cleaning
  var emailError = validateEmail(email.trim());
  var usernameErrors = validateUsername(username.trim());
  var passwordErrors = validatePassword(password.trim());
  
  setEmailError(emailError);
  setUsernameErrors(usernameErrors);
  setPasswordErrors(passwordErrors);

  if(emailError.length === 0 && usernameErrors.length === 0 && passwordErrors.length === 0){
    setSuccess(true);

    //Send data to API endpoint
      var formData = {
        "email": email,
        "username": username,
        "password": password
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <label htmlFor="email" >Email</label><br/>
        <input type="text" name="email" onChange={handleEmail}/><br/>
        <div className='error'>{emailError}</div>
        <label htmlFor="username">Username</label><br/>
        <input type="text" name="username" onChange={handleUsername}/><br/>
        {usernameErrors.map((error, index) => (<div className="error" key={index}>{error}</div>))}
        <label htmlFor="password">Password</label><br/>
        <input type="password" name="password" onChange={handlePassword}/><br/>
        {passwordErrors.map((error, index) => (<div className="error" key={index}>{error}</div>))}
        <input type="submit" id="submit" name="submit" value="Create Account"/>
      </form>
      {success ? <div>Account successfully created! <Link href={'./'}>Login here</Link></div> : <div></div>}
    </div>
  );
}