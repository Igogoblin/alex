import Container from "@/components/container/container";
import redesignMainImage from "../../../public/redesigning/redesigningMain.jpg";
import Image from "next/image";
import { RedesigningAbout } from "./sections/redesigning-about";
import redesigningAboutImage from "../../../public/redesigning/redesigningAbout.png";

import style from "./redesigning.module.css";
import { RedesigningIterations } from "./sections/redesigning-iterations";
import { RedesigningExamples } from "./sections/redesigning-examples";
import { RedesigningDesign } from "./sections/redesigning-design";
import { RedesigningSummary } from "./sections/redesigning-summary";
import travelMain from "../../../public/travel/travelMain.jpg";
import cyberpunkIMage from "../../../public/cyberpunk/cyberpunkMain.jpg";
import NextProject from "@/components/next-project/next-project";
import { RedesigningVersion } from "./sections/redesigning-version";

export default function Redesigning() {
  return (
    <main>
      <Container>
        <h1 className={style.title} id="works">
          Redesigning a Contract discount rule table for enterprise users
        </h1>
        <Image
          src={redesignMainImage}
          alt="redesigning"
          width={1140}
          height={648}
          style={{ margin: "44px auto 60px auto" }}
        />
      </Container>
      <Container>
        <RedesigningAbout />
      </Container>
      <Image
        src={redesigningAboutImage}
        alt="redesigning"
        width={1340}
        height={480}
        style={{ margin: "24px auto 60px auto" }}
      />
      <Container>
        <RedesigningIterations />
      </Container>
      <Container>
        <RedesigningExamples />
      </Container>
      <Container>
        <RedesigningDesign />
      </Container>
      <RedesigningVersion />
      <Container>
        <RedesigningSummary />
      </Container>
      <NextProject
        link={"/cyberpunk"}
        image={cyberpunkIMage}
        linkPrev={"/travel"}
        imagePrev={travelMain}
        isBack={true}
      />
    </main>
  );
}
