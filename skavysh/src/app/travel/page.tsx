import Container from "@/components/container/container";
import travel from "../../../public/travel/travelMain.jpg";
import Image from "next/image";
import style from "./travel.module.css";
import NextProject from "@/components/next-project/next-project";
import redesigning from "../../../public/redesigning/redesigningMain.jpg";
import avodark from "../../../public/avoDark/avoDark.jpg";
import { TravelAbout } from "./sections/travel-about";
import aboutImage from "../../../public/travel/travelAbout.png";
import { TravelTypography } from "./sections/travel-typography";
import { TravelColor } from "./sections/travel-color";
import beforeAfterImage from "../../../public/travel/travelBeforeAfter.png";
import { TravelComponent } from "./sections/travel-component";
import breadcrumbsImage from "../../../public/travel/travelBreadcrumbs.png";
import { TravelDeveloper } from "./sections/travel-developer";
import { TravelResume } from "./sections/travel-resume";
import { EmblaOptionsType } from "embla-carousel";
import { TRAVEL_IMAGES_SLIDER } from "./travelData";
// import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "../../components/carousel/emblaCarousel";

const OPTIONS: EmblaOptionsType = {
  loop: true,
};

export default function Travel() {
  // const [emblaRef] = useEmblaCarousel(options);
  return (
    <main>
      <Container>
        <h1 className={style.title} id="works">
          Revamping the Design System for a business travel platform
        </h1>
        <Image src={travel} alt="travel" width={1140} height={500} />
      </Container>
      <Container>
        <TravelAbout />
      </Container>
      <Image
        src={aboutImage}
        alt="about"
        width={1340}
        height={451}
        style={{ margin: "44px auto 60px auto" }}
      />
      <Container>
        <TravelTypography />
      </Container>
      <Container>
        <TravelColor />
      </Container>
      <Image
        src={beforeAfterImage}
        alt="before after"
        width={1340}
        height={500}
        style={{ margin: "0 auto" }}
      />
      <Container>
        <TravelComponent />
      </Container>
      <Image
        src={breadcrumbsImage}
        alt="breadcrumbs"
        width={1340}
        height={700}
        style={{ margin: "44px auto 60px auto" }}
      />
      <Container>
        <TravelDeveloper />
      </Container>{" "}
      <EmblaCarousel slides={TRAVEL_IMAGES_SLIDER} options={OPTIONS} />
      <Container>
        <TravelResume />
      </Container>
      <NextProject
        link={"/redesigning"}
        image={redesigning}
        linkPrev={"/avodark"}
        imagePrev={avodark}
        isBack
      />
    </main>
  );
}
