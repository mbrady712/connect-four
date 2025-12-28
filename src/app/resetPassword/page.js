import Link from "next/link";

export default function ResetPassword(){
    //Enter username or email associated with account
    //Send secure code message
    //Ask for secure code
    //Ask for new password
    //Link back to Login
    return(
            <div>
               <div>
                    <h2>Enter the username associated with your account.</h2>
                    <input type="text" id="username" name="username"/><br/>
                    <input type="submit" id="submitUsername" name="submitUsername"/><br/>
               </div>
               <div>
                    <h2>A secure code has been sent to the email associated with the account</h2>
                    <input type="text" id="secureCode" name="secureCode"/><br/>
                    <input type="submit" id="submitCode" name="submitCode"/><br/>
               </div>
               <div>
                    <h2>Enter your new password</h2>
                    <input type="text" id="newPassword" name="newPassword"/><br/>
                    <input type="submit" id="submitNewPassword" name="submitNewPassword"/><br/>
               </div>
               <div>
                    <h2>Your password has been successfully updated.  
                         <Link href={"../"}>
                              &nbsp;Login here
                         </Link>
                    </h2>
                    
               </div>
            </div>
        );
}