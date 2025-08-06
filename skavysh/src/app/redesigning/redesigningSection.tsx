import ButtonLink from "@/components/button/button-link";
import style from "./redesigning.module.css";
import Image from "next/image";
import redesigning from "../../../public/redesigning/redesigningMain.jpg";

export default function RedesigningSection() {
  return (
    <section className={style.redesigning}>
      <div className={style.content}>
        <h2>Redesigning a Contract discount rule table for enterprise users</h2>
        <ButtonLink text={"show case"} size={24} link={"/redesigning"} />
      </div>
      <Image src={redesigning} alt="redesigning" width={730} height={358} />
    </section>
  );
}
