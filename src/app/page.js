import Image from "next/image";
import graphic from "../../public/login_graphic.jpg"
import Link from 'next/link'

export function LoginForm (){
  return (
    <form>
      <h1>Login</h1>
      <label htmlFor="fname">Username</label><br/>
      <input type="text" id="fname" name="fname"/><br/>
      <label htmlFor="lname">Password</label><br/>
      <input type="text" id="lname" name="lname"/><br/>
      <input type="submit" id="submit" name="submit" value="Login"/>
    </form>
  );
}

export function Navbar(){
  return(
    <nav>
      <div className="title">
        <Link href={""} className="titleLink">
          <div className="blue">
            Connect 
          </div>
          <div className="red">
            &nbsp;Four
          </div>
        </Link>
      </div>
      <div>
        <Link href={""}>Login</Link>
      </div>
    </nav>
  );
}

export function Links (){
  return(
    <div>
      <Link href={""}>Forgot Username?</Link><br/>
      <Link href={""}>Forgot Password?</Link>
    </div>
  );
}

export function Graphic (){
  return (
    <img src="login_graphic.jpg"></img>
  );
}

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Graphic></Graphic>
      <LoginForm></LoginForm>
      <Links></Links>
    </div>
  );
}
