import Image from "next/image";
import avatar from "../../../../public/avatar.jpg";
import style from "./main-head.module.css";
import arrow from "../../../../public/arrowUpRight.svg";
import Link from "next/link";
// import ButtonLink from "@/components/button/button-link";

const dataMainHead = {
  title1: "I’m Aleksandra Skavysh ",
  title2: "a UX/UI designer from Tashkent. I’m currently growing ",
  text: "Hi! I am a UX/UI designer with experience in complex B2B products in various industries, including logistics, foodstuff, and business automation. My passion is to transform complex information systems into intuitive and emotionally engaging solutions that deliver real value to businesses. I am also passionate about Design Systems and have experience implementing them for consistency and scalability.",
};
export default function MainHead() {
  return (
    <section className={style.mainHead}>
      <h1 className={style.title}>
        {/* {dataMainHead.title1}
        <Image src={avatar} alt="avatar" width={54} height={54} unoptimized />
        {dataMainHead.title2} */}
        I’m Aleksandra Skavysh
        <Image
          src={avatar}
          alt="avatar"
          width={54}
          height={54}
          unoptimized
          className={style.avatar}
        />
        a UX/UI designer from Tashkent. I’m currently growing{" "}
        <Link
          href={"https://www.paynet.uz/"}
          target="_blank"
          className={style.link}
        >
          Paynet
          <Image src={arrow} alt="arrow" width={52} height={52} unoptimized />
        </Link>
      </h1>
      <p className={style.text}>{dataMainHead.text}</p>
    </section>
  );
}
