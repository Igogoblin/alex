import Container from "@/components/container/container";
import redesignMainImage from "../../../public/redesigning/redesigningMain.jpg";
import Image from "next/image";

export default function Redesigning() {
  return (
    <main>
      <Container>
        <h1>Redesigning a Contract discount rule table for enterprise users</h1>
        <Image
          src={redesignMainImage}
          alt="redesigning"
          width={1140}
          height={648}
        />
      </Container>
    </main>
  );
}
