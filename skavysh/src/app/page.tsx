import Container from "@/components/container/container";
import Line from "@/components/line/Line";
import MainHead from "@/components/main/head/main-head";
import PaynetChildren from "./children/paynetChidren";
import AvoDark from "./avodark/avoDark";
import TravelSection from "./travel/travelSection";

export default function Home() {
  return (
    <main>
      <Container>
        <MainHead />
      </Container>
      <Container>
        <Line />
        <PaynetChildren />
      </Container>
      <Container>
        <AvoDark />
      </Container>
      <TravelSection />
    </main>
  );
}
