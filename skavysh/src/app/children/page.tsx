import Container from "@/components/container/container";
import ChildrenHead from "./children-head/childrenHead";
import ChildrenAbout from "./children-about/childrenAbout";
import childrenCentral from "../../../public/children/childrenCentral.jpg";
import Image from "next/image";
import ChildrenFigure from "./children-figure/childrenFigure";

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
        width={1340}
        height={540}
        style={{ margin: "60px 0" }}
      />
      <Container>
        <ChildrenFigure />
      </Container>
    </main>
  );
}
