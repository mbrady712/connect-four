'use client'

import { useRouter } from 'next/navigation';
import { useState } from "react";
import { validateUsername } from '../../util/Validations';
import { validatePassword } from '../../util/Validations';

export default function LoginForm (){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameErrors, setUsernameErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);

  const router = useRouter();

  function handleUsername(e){
    setUsername(e.target.value)
  }

  function handlePassword(e){
    setPassword(e.target.value)
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

