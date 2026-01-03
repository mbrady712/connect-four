import Link from "next/link";

export function Header(){

  var loggedIn = true;

  return(
    <nav id="navbar">
      <div className="title">
        <Link href={"../"} className="titleLink">
          <div className="blue">
            Connect 
          </div>
          <div className="red">
            &nbsp;Four
          </div>
        </Link>
      </div>
      {loggedIn ? 
      <div id="loggedInHeader">
        <div id="headerPicContainer">
          <img id="headerPic" src="spongebob.jpeg"/>
        </div>
        <Link id="gameLink" href={"/playGame"}>Play!</Link>
        <Link id="accountInfoLink" href={"/viewAccount"}>Account Info</Link>
        <Link id="logoutLink" href={"../"}>Logout</Link>
      </div>
      :
        <div id="loggedOutHeader">
          <Link id="createAccountLink" href={"@/app/createAccount"}>Create Account</Link>
          <Link id="loginLink" href={"../"}>Login</Link>
        </div>}
    </nav>
  );
}