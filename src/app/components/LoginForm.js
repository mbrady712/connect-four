export default function LoginForm (){
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