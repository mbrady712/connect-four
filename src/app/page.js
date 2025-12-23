import Image from "next/image";
import graphic from "../../public/login_graphic.jpg"
import Link from 'next/link'
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
