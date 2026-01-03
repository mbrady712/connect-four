'use client'

import Link from "next/link";
import { useState } from "react";
import { validateUsername } from "@/util/Validations";
import { validatePassword } from "@/util/Validations";

export default function ResetUsername(){

     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [usernameErrors, setUsernameErrors] = useState([]);
     const [passwordErrors, setPasswordErrors] = useState([]);
     const [usernameValidated, setUsernameValidated] = useState(false)
     const [passwordValidated, setPasswordValidated] = useState(false)

     function handleUsername(e){
          setUsername(e.target.value)
     }

     function handlePassword(e){
          setPassword(e.target.value)
     }

     function checkUsername(){
          var usernameErrors = validateUsername(username.trim());
          setUsernameErrors(usernameErrors);

          if(usernameErrors.length === 0){
               setUsernameValidated(true);
          }
     }

     function checkPassword(){
          var passwordErrors = validatePassword(password.trim());
          setPasswordErrors(passwordErrors);
          
          if(passwordErrors.length === 0){
               setPasswordValidated(true);
          }
     }

     return(
            <div>
               <div>
                    <h2>Enter your password.</h2>
                    <input type="password" id="password" name="password" onChange={handlePassword}/><br/>
                    <input type="submit" id="submitPassword" name="submitPassword" onClick={checkPassword}/><br/>
                    {passwordErrors.map((error, index) => (<div className="error" key={index}>{error}</div>))}
               </div>
               <div className={passwordValidated ? "visible" : "invisible"}>
                    <h2>Enter your new username</h2>
                    <input type="text" id="newUsername" name="newUsername" onChange={handleUsername}/><br/>
                    <input type="submit" id="submitNewUsername" name="submitNewUsername" onClick={checkUsername}/><br/>
                    {usernameErrors.map((error, index) => (<div className="error" key={index}>{error}</div>))}
               </div>
               <div className={usernameValidated ? "visible" : "invisible"}> 
                    <h2>Your username has been successfully updated.  
                         <Link href={"../"}>
                              &nbsp;Login here
                         </Link>
                    </h2>
                    
               </div>
            </div>
        );
}