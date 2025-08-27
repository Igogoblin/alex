import Image from "next/image";
import cocktailStart from "../../../public/cocktail/cocktailStart.png";
import cocktailProductImage from "../../../public/cocktail/cocktailProduct.png";
import cocktailStepImage from "../../../public/cocktail/cocktailStep.jpg";
import cocktailSlingImage from "../../../public/cocktail/cocktailSling.png";
import cocktailCafeImage from "../../../public/cocktail/cocktailCafe.png";
import cocktailProductsImage from "../../../public/cocktail/cocktailProducts.png";
import cocktailIllustration from "../../../public/cocktail/cocktailIllustrator.png";
import cocktailMixologyImage from "../../../public/cocktail/cocktailMixology.png";
import cyberpunkImage from "../../../public/cyberpunk/cyberpunkMain.jpg";
import postersImage from "../../../public/posters/postersMain.jpg";
import Container from "@/components/container/container";
import { CocktailAbout } from "./sections/cocktail-about";
import { CocktailGoal } from "./sections/cocktail-goal";
import { CocktailVisual } from "./sections/cocktail-visual";
import { CocktailDesign } from "./sections/cocktail-design";
import { CocktailVideo } from "./sections/cocktail-video";
import { CocktailCustom } from "./sections/cocktail-custom";
import NextProject from "@/components/next-project/next-project";

export default function Cocktail() {
  return (
    <main className="flex flex-col gap-11 md:gap-15">
      <Container>
        <h1 id="works" className="mb-[44px] mt-[60px]">
          Cocktail mixing app concept
        </h1>
        <Image
          src={cocktailStart}
          alt="cocktail app"
          width={1140}
          height={500}
        />
      </Container>

      <Container>
        <CocktailAbout />
      </Container>
      <Container>
        <CocktailGoal />
      </Container>
      <Image
        src={cocktailProductImage}
        alt="cocktail app product"
        width={1340}
        height={480}
      />
      <Container>
        <CocktailVisual />
      </Container>
      <Container>
        <CocktailDesign />
      </Container>
      <Image
        src={cocktailStepImage}
        alt="cocktail app step"
        width={1340}
        height={771}
      />
      <Container>
        <CocktailVideo />
      </Container>
      <Image
        src={cocktailSlingImage}
        alt="cocktail app sling"
        width={1340}
        height={619}
      />
      <Image
        src={cocktailCafeImage}
        alt="cocktail app cafe"
        width={1340}
        height={619}
      />
      <Container>
        <CocktailVideo />
      </Container>
      <Container>
        <CocktailCustom />
      </Container>
      <Image
        src={cocktailProductsImage}
        alt="cocktail app"
        width={1340}
        height={320}
      />
      <Image
        src={cocktailIllustration}
        alt="cocktail app"
        width={1340}
        height={580}
      />
      <Image
        src={cocktailMixologyImage}
        alt="cocktail app"
        width={1340}
        height={619}
      />
      <NextProject
        link={"/posters"}
        image={postersImage}
        linkPrev={"/cyberpunk"}
        imagePrev={cyberpunkImage}
        isBack={true}
      />
    </main>
  );
}
