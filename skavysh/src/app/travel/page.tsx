import Container from "@/components/container/container";
import travel from "../../../public/travel/travelMain.jpg";
import Image from "next/image";
import style from "./travel.module.css";
import NextProject from "@/components/next-project/next-project";
import redesigning from "../../../public/redesigning/redesigningMain.jpg";

export default function Travel() {
  return (
    <main>
      <section>
        <Container>
          <h1 className={style.title}>
            Revamping the Design System for a business travel platform
          </h1>
          <Image src={travel} alt="travel" width={1140} height={500} />
        </Container>
      </section>
      <NextProject link={"/redesigning"} image={redesigning} />
    </main>
  );
}
