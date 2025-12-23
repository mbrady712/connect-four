import Link from "next/link";

export function Header(){
  return(
    <nav>
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
      <div>
        <Link href={"../"}>Login</Link>
      </div>
    </nav>
  );
}