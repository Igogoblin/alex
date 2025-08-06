// "use client";
import Link from "next/link";
import style from "./main-visual.module.css";
// import aqualizer from "../../../../public/cyberpunk/cyberpunk1.jpg";
// import face from "../../../../public/cyberpunk/cyberpunkFaceMain.jpg";
// import player from "../../../../public/cyberpunk/cyberpunkPlayerMain.jpg";
// import behancePerson1 from "../../../../public/forBehancePersonHi.jpg";
// import behancePerson2 from "../../../../public/forBehancePerson.jpg";
import behanceIcon from "../../../../public/Behance.svg";
// import cocktailCharacter from "../../../../public/cocktail/cocktailCharacterMain.jpg";
// import cocktailInstruction from "../../../../public/cocktail/cocktailInstructionMain.jpg";
import posters from "../../../../public/posters/postersMain.jpg";
import cyberpunkMain from "../../../../public/cyberpunk/cyberpunkMain.jpg";
import behancePersonMain from "../../../../public/behancePersonMain.jpg";
import cocktailMain from "../../../../public/cocktail/cocktailMain.jpg";

import Image from "next/image";
export default function MainVisual() {
  return (
    <section className={style.mainVisual} id="visual">
      <div className={style.visual_design}>Visual design</div>
      <div className={style.visual_block}>
        <Link
          href={"/cyberpunk"}
          className={`${style.visual_item} ${style.item_cyberpunk}`}
        >
          {/* <div className={`${style.visual_item} ${style.item_cyberpunk}`}> */}
          {/* <Image
            src={aqualizer}
            alt="aqualizer"
            width={126}
            height={273}
            unoptimized
          />
          <Image src={face} alt="face" width={152} height={329} unoptimized />
          <Image
            src={player}
            alt="player"
            width={126}
            height={126}
            unoptimized
          /> */}
          {/* </div> */}
          <Image src={cyberpunkMain} alt="cyberpunk" width={696} height={400} />
        </Link>
        <Link
          href={"#"}
          className={`${style.visual_item} ${style.item_behance}`}
          passHref
        >
          {/* <Image
            src={behancePerson1}
            alt="behance person"
            width={152}
            height={329}
          />
          <Image
            src={behancePerson2}
            alt="behance person"
            width={152}
            height={329}
          /> */}
          <Image
            src={behancePersonMain}
            alt="behance person"
            width={420}
            height={400}
          />
          <Image
            src={behanceIcon}
            alt="behance Icon"
            width={48}
            height={48}
            className={style.behanceIcon}
            unoptimized
          />
        </Link>
        <Link
          href={"/cocktail"}
          className={`${style.visual_item} ${style.item_behance}`}
        >
          {/* <Image
            src={cocktailCharacter}
            alt="cocktail character"
            width={152}
            height={329}
            unoptimized
          />
          <Image
            src={cocktailInstruction}
            alt="cocktail instruction"
            width={152}
            height={329}
            unoptimized
          /> */}
          <Image src={cocktailMain} alt="cocktail" width={420} height={400} />
        </Link>
        <Link href={"/posters"} className={style.visual_item}>
          <Image
            src={posters}
            alt="posters"
            width={706}
            height={400}
            unoptimized
          />
        </Link>
      </div>
    </section>
  );
}
