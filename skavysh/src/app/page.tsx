import Container from "@/components/container/container";
import MainHead from "@/components/main/head/main-head";
import PaynetChildren from "./children/paynetChildren";
import { AvoDark } from "./avodark/avoDark";
import TravelSection from "./travel/travelSection";
import RedesigningSection from "./redesigning/redesigningSection";
import MainVisual from "@/components/main/visual/main-visual";

export default function Home() {
  return (
    <main>
      <Container>
        <MainHead />
      </Container>
      <Container>
        <PaynetChildren />
      </Container>
      <Container>
        <AvoDark />
      </Container>
      <TravelSection />
      <Container>
        <RedesigningSection />
      </Container>
      <Container>
        <MainVisual />
      </Container>
    </main>
  );
}
