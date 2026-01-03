'use client'

import Link from "next/link";
import { useState } from "react";
import { validateUsername } from "@/util/Validations";
import { validateCode } from "@/util/Validations";
import { validatePassword } from "@/util/Validations";

export default function ResetPassword(){

      const [username, setUsername] = useState("");
      const [code, setCode] = useState("");
      const [password, setPassword] = useState("");
      const [usernameErrors, setUsernameErrors] = useState([]);
      const [codeErrors, setCodeErrors] = useState([]);
      const [passwordErrors, setPasswordErrors] = useState([]);
      const [usernameValidated, setUsernameValidated] = useState(false)
      const [codeValidated, setCodeValidated] = useState(false)
      const [passwordValidated, setPasswordValidated] = useState(false)

     function handleUsername(e){
          setUsername(e.target.value)
     }

     function handleCode(e){
          setCode(e.target.value)
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

     function checkCode(){
          var codeErrors = validateCode(code.trim());
          setCodeErrors(codeErrors);

          if(codeErrors.length === 0){
               setCodeValidated(true);
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
                    <h2>Enter the username associated with your account.</h2>
                    <input type="text" id="username" name="username" onChange={handleUsername}/><br/>
                    <input type="submit" id="submitUsername" name="submitUsername" onClick={checkUsername}/><br/>
                    {usernameErrors.map((error, index) => (<div className="error" key={index}>{error}</div>))}
               </div>
               <div className={usernameValidated ? "visible" : "invisible"}>
                    <h2>A secure code has been sent to the email associated with the account</h2>
                    <input type="text" id="secureCode" name="secureCode" onChange={handleCode}/><br/>
                    <input type="submit" id="submitCode" name="submitCode" onClick={checkCode}/><br/>
                    {codeErrors.map((error, index) => (<div className="error" key={index}>{error}</div>))}
               </div>
               <div className={codeValidated ? "visible" : "invisible"}>
                    <h2>Enter your new password</h2>
                    <input type="password" id="newPassword" name="newPassword" onChange={handlePassword}/><br/>
                    <input type="submit" id="submitNewPassword" name="submitNewPassword" onClick={checkPassword}/><br/>
                    {passwordErrors.map((error, index) => (<div className="error" key={index}>{error}</div>))}
               </div>
               <div className={passwordValidated ? "visible" : "invisible"}>
                    <h2>Your password has been successfully updated.  
                         <Link href={"../"}>
                              &nbsp;Login here
                         </Link>
                    </h2>
                    
               </div>
            </div>
        );
}