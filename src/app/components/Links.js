import Link from "next/link";

export default function Links (){
  return(
    <div>
      <Link href={"/createAccount"}>New User? Create an account here</Link> <br/>
      <Link href={"/resetUsername"}>Forgot Username?</Link><br/>
      <Link href={"/resetPassword"}>Forgot Password?</Link>
    </div>
  );
}