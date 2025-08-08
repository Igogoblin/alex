import Container from "@/components/container/container";
import ChildrenHead from "./children-head/childrenHead";
import ChildrenAbout from "./children-about/childrenAbout";
import childrenCentral from "../../../public/children/childrenCentral.jpg";
import Image from "next/image";
import ChildrenFigure from "./children-figure/childrenFigure";
import ChildrenResume from "./children-resume/childrenResume";
import NextProject from "@/components/next-project/next-project";
import avodark from "../../../public/avoDark/avoDark.jpg";

export default function Children() {
  return (
    <main>
      <Container>
        <ChildrenHead />
      </Container>
      <Container>
        <ChildrenAbout />
      </Container>
      <Image
        src={childrenCentral}
        alt="children central"
        width={1390}
        height={540}
        style={{ margin: "60px 0" }}
      />
      <Container>
        <ChildrenFigure />
      </Container>
      <Container>
        <ChildrenResume />
      </Container>
      <Container>
        <NextProject link={"/avodark"} image={avodark} />
      </Container>
    </main>
  );
}
