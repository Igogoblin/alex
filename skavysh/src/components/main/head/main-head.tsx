import Image from "next/image";
import avatar from "../../../../public/avatar.jpg";
import style from "./main-head.module.css";
import Link from "next/link";

const dataMainHead = {
  title1: "I’m Aleksandra Skavysh ",
  title2: "a UX/UI designer from Tashkent. I’m currently growing ",
  text: "Hi! I am a UX/UI designer with experience in complex B2B products in various industries, including logistics, foodstuff, and business automation. My passion is to transform complex information systems into intuitive and emotionally engaging solutions that deliver real value to businesses. I am also passionate about Design Systems and have experience implementing them for consistency and scalability.",
};
export default function MainHead() {
  return (
    <section className={style.mainHead}>
      <h1 className={style.title}>
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
          <svg
            width="52"
            height="52"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3931 7.60738L7.02539 16.9751"
              stroke="#2B2D31"
              stroke-width="1.5"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M9.97461 7.0249L16.9246 7.0739L16.9746 14.0249"
              stroke="#323232"
              stroke-width="1.5"
              stroke-linecap="square"
              stroke-linejoin="bevel"
            />
          </svg>
        </Link>
      </h1>
      <p className={style.text}>{dataMainHead.text}</p>
    </section>
  );
}
