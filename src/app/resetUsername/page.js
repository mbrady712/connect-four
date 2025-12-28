import Link from "next/link";

export default function ResetUsername(){
    //Enter username or email associated with account
    //Send secure code message
    //Ask for secure code
    //Ask for new password
    //Link back to Login
    return(
            <div>
               <div>
                    <h2>Enter your password.</h2>
                    <input type="text" id="username" name="username"/><br/>
                    <input type="submit" id="submitPassword" name="submitPassword"/><br/>
               </div>
               <div>
                    <h2>Enter your new username</h2>
                    <input type="text" id="newPassword" name="newPassword"/><br/>
                    <input type="submit" id="submitNewUsername" name="submitNewUsername"/><br/>
               </div>
               <div>
                    <h2>Your username has been successfully updated.  
                         <Link href={"../"}>
                              &nbsp;Login here
                         </Link>
                    </h2>
                    
               </div>
            </div>
        );
}