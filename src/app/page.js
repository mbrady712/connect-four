import LoginForm from "./components/LoginForm";
import Links from "./components/Links";
import { Graphic } from "./components/Graphic";

export default function Home() {
  return (
    <div>
      <Graphic></Graphic>
      <LoginForm></LoginForm>
      <Links></Links>
    </div>
  );
}
