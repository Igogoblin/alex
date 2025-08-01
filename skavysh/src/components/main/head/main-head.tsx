import Image from "next/image";
import avatar from "../../../../public/avatar.jpg";
import style from "./main-head.module.css";
import ButtonLink from "@/components/button/button-link";

const dataMainHead = {
  title1: "I’m Aleksandra Skavysh ",
  title2: "a UX/UI designer from Tashkent. I’m currently growing ",
  text: "Hi! I am a UX/UI designer with experience in complex B2B products in various industries, including logistics, foodstuff, and business automation. My passion is to transform complex information systems into intuitive and emotionally engaging solutions that deliver real value to businesses. I am also passionate about Design Systems and have experience implementing them for consistency and scalability.",
};
export default function MainHead() {
  return (
    <section>
      <h1 className={style.title}>
        {dataMainHead.title1}
        <Image src={avatar} alt="avatar" width={54} height={54} unoptimized />
        {dataMainHead.title2}
        <ButtonLink text={"Paynet"} size={52} link={"#"} />
      </h1>
      <p className={style.text}>{dataMainHead.text}</p>
    </section>
  );
}
