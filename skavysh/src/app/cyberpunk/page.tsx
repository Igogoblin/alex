import cyberpunkMainImage from "../../../public/cyberpunk/cyberpunkMain.jpg";
import Image from "next/image";
import { CyberpunkAbout } from "./sections/cyberpunk-about";
import Container from "@/components/container/container";
import { CyberpunkResearch } from "./sections/cyberpunk-research";
import cyberpunkCountryImage from "../../../public/cyberpunk/cyberpunkCountry.png";
import { CyberpunkCharacter } from "./sections/cyberpunk-character";
import { CyberpunkCore } from "./sections/cyberpunk-core";
import { CyberpunkUser } from "./sections/cyberpunk-user";
import cyberpunkMiddleImage from "../../../public/cyberpunk/cyberpunkMiddle.png";
import { CyberpunkVisual } from "./sections/cyberpunk-visual";
import cyberpunkEnterScreenImage from "../../../public/cyberpunk/cyberpunkEnterScreen.jpg";
import cyberpunkPersonalImage from "../../../public/cyberpunk/cyberpunkPersonal.jpg";
import cyberpunkExamplesImage from "../../../public/cyberpunk/cyberpunkExamples.jpg";
import { CyberpunkSummary } from "./sections/cyberpunk-summary";
import redesigningPageImage from "../../../public/redesigning/redesigningMain.jpg";
import cocktailPageImage from "../../../public/cocktail/cocktailMain.jpg";
import NextProject from "@/components/next-project/next-project";
export default function Cyberpunk() {
  return (
    <main>
      <section className="flex flex-col gap-[44px] mb-[60px] mt-[60px]">
        <h1 id="works" className="text-[40px] max-w-[694px]">
          Cyberpunk music app for expression, identity, and rebellion
        </h1>
        <Image
          src={cyberpunkMainImage}
          alt="cyberpunk"
          width={1140}
          height={500}
        />
      </section>
      <Container>
        <CyberpunkAbout />
      </Container>
      <Container>
        <CyberpunkResearch />
      </Container>
      <Image
        src={cyberpunkCountryImage}
        alt="cyberpunk images of a country"
        width={1340}
        height={480}
      />
      <Container>
        <CyberpunkCharacter />
      </Container>
      <Container>
        <CyberpunkCore />
      </Container>
      <Container>
        <CyberpunkUser />
      </Container>
      <Image
        src={cyberpunkMiddleImage}
        alt="cyberpunk"
        width={1340}
        height={620}
        style={{ margin: "44px auto 60px auto" }}
      />
      <Container>
        <CyberpunkVisual />
      </Container>
      <Image
        src={cyberpunkEnterScreenImage}
        alt="cyberpunk"
        width={1340}
        height={861}
      />
      <Image
        src={cyberpunkPersonalImage}
        alt="cyberpunk"
        width={1340}
        height={861}
      />
      <Image
        src={cyberpunkExamplesImage}
        alt="cyberpunk"
        width={1340}
        height={773}
      />
      <Container>
        <CyberpunkSummary />
      </Container>
      <NextProject
        link={"/cocktail"}
        image={cocktailPageImage}
        linkPrev={"/redesigning"}
        imagePrev={redesigningPageImage}
        isBack={true}
      />
    </main>
  );
}
