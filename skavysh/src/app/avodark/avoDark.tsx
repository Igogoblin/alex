import Image from "next/image";
import avodark from "../../../public/avoDark/avoDark.jpg";
import ButtonLink from "@/components/button/button-link";
import style from "./avoDark.module.css";

export default function AvoDark() {
  return (
    <section className={style.avoDark}>
      <Image src={avodark} alt="avodark" width={815} height={358} />
      <div>
        <h2>
          Dark mode & tokenisation.<br></br> Design system updates
        </h2>
        <ButtonLink text={"show case"} size={24} link={"/avodark"} />
      </div>
    </section>
  );
}
