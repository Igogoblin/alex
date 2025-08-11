import Container from "@/components/container/container";
import avodark from "../../../public/avoDark/avoDark.jpg";
import Image from "next/image";
import style from "./avoDark.module.css";
import NextProject from "@/components/next-project/next-project";
import travel from "../../../public/travel/travelMain.jpg";
import AvodarkAbout from "./avodark-about/avodarkAbout";
import AvodarkAudit from "./avodark-audit/avoDarkAudit";
import AvodarkLibrary from "./avodark-library/avodarkLibrary";
import library from "../../../public/avoDark/avodarkLibrary.png";
import AvodarkColor from "./avodark-color/avodarkColor";
import images from "../../../public/avoDark/avodarkImages.png";
import AvodarkToken from "./avodark-token/avodarkToken";
import global from "../../../public/avoDark/avodarkGlobal.png";
import children from "../../../public/children/childrenPrevious.png";

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
        <AvodarkAudit />
      </Container>
      <Container>
        <AvodarkLibrary />
      </Container>
      <Image
        src={library}
        alt="library"
        width={1340}
        height={886}
        style={{ margin: "60px auto" }}
      />
      <Container>
        <AvodarkColor />
        <Image
          src={images}
          alt="images"
          width={1140}
          height={640}
          style={{ margin: "44px 0 60px" }}
        />
      </Container>
      <Container>
        <AvodarkToken />
      </Container>
      <Image
        src={global}
        alt="global"
        width={1340}
        height={513}
        style={{ margin: "44px auto" }}
      />
      <Container>
        <NextProject link={"/redesigning"} image={children} isBack={true} />
        <NextProject link={"/travel"} image={travel} />
      </Container>
    </main>
  );
}
