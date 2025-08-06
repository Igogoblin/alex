import Image from "next/image";
import travel from "../../../public/travel/travelMain.jpg";
import ButtonLink from "@/components/button/button-link";
import style from "./travel.module.css";
export default function TravelSection() {
  return (
    <section className={style.travel}>
      <Image src={travel} alt="travel" width={1340} height={400} />
      <div className={style.content}>
        <h2>
          Revamping the Design System for a<br></br> business travel platform
        </h2>
        <ButtonLink text={"show case"} size={24} link={"/travel"} />
      </div>
    </section>
  );
}
