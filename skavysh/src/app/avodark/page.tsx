import Container from "@/components/container/container";
import avodark from "../../../public/avoDark/avoDark.jpg";
import Image from "next/image";
import style from "./avoDark.module.css";
import NextProject from "@/components/next-project/next-project";
import travel from "../../../public/travel/travelMain.jpg";
import AvodarkAbout from "./avodark-about/avodarkAbout";

export default function Avodark() {
  return (
    <main>
      <Container>
        <h1 className={style.title}>
          Dark mode & tokenisation. Design system updates
        </h1>
        <Image src={avodark} alt="avodark" width={1140} height={500} />
      </Container>
      <Container>
        <AvodarkAbout />
      </Container>

      <Container>
        <NextProject link={"/travel"} image={travel} />
      </Container>
    </main>
  );
}
