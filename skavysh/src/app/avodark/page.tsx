import Container from "@/components/container/container";
import avodark from "../../../public/avoDark/avoDark.jpg";
import Image from "next/image";
import style from "./avoDark.module.css";
import NextProject from "@/components/next-project/next-project";
import travel from "../../../public/travel/travelMain.jpg";
import AvodarkAbout from "./sections/avodarkAbout";
import AvodarkAudit from "./sections/avoDarkAudit";
import AvodarkLibrary from "./sections/avodarkLibrary";
import library from "../../../public/avoDark/avodarkLibrary.png";
import AvodarkColor from "./sections/avodarkColor";
import images from "../../../public/avoDark/avodarkImages.png";
import AvodarkToken from "./sections/avodarkToken";
import global from "../../../public/avoDark/avodarkGlobal.png";
import children from "../../../public/children/childrenPrevious.png";
import AvodarkWorking from "./sections/avodarkWorking";
import showing from "../../../public//avoDark/avodarkShowing.png";
import semantic from "../../../public/avoDark/avodarkSemantic.png";
import structure from "../../../public/avoDark/avodarkStructure.png";
import common from "@/styles/common.module.css";
export default function Avodark() {
  return (
    <main>
      <Container>
        <h1 className={style.title} id="works">
          Dark mode & tokenisation. Design system updates
        </h1>
        <Image
          src={avodark}
          alt="avodark"
          width={1140}
          height={500}
          style={{ margin: "60px 0" }}
        />
      </Container>
      <Container>
        <AvodarkAbout />
      </Container>
      <AvodarkWorking />
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
          width={1240}
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
        <section className="flex flex-col">
          <div className={common["section-container"]}>
            <div className={common["section-title"]}></div>
            <div>
              <p className={common["section-description--title"]}>
                semantic tokens
              </p>
              <p className={common["section-description"]}>
                The semantic token is to systemize the design language for a
                specific semantic group of components.
              </p>
            </div>
          </div>
        </section>
      </Container>
      <Image
        src={semantic}
        alt="semantic"
        width={1340}
        height={1057}
        style={{ margin: "44px auto" }}
      />
      <Container>
        <section className="flex flex-col">
          <div className={common["section-container"]}>
            <div className={common["section-title"]}></div>
            <div>
              <p className={common["section-description--title"]}>
                final component structure
              </p>
              <Image
                src={structure}
                alt="structure"
                width={729}
                height={470}
                style={{ margin: "32px auto 0 auto" }}
              />
            </div>
          </div>
        </section>
      </Container>
      <Image
        src={showing}
        alt="showing"
        width={1340}
        height={600}
        style={{ margin: "60px auto" }}
      />
      {/* <Container>
        <NextProject link={"/redesigning"} image={children} isBack={true} />
        <NextProject link={"/travel"} image={travel} />
      </Container> */}
      <NextProject
        {...{
          linkPrev: "/children",
          imagePrev: children,
          isBack: true,
          link: "/travel",
          image: travel,
        }}
      />
    </main>
  );
}
