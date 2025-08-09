import Link from "next/link";
import style from "./main-visual.module.css";
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
          <Image src={cyberpunkMain} alt="cyberpunk" width={696} height={400} />
        </Link>
        <Link
          href={"#"}
          className={`${style.visual_item} ${style.item_behance}`}
          passHref
        >
          <Image
            src={behancePersonMain}
            alt="behance person"
            width={420}
            height={400}
          />
        </Link>
        <Link
          href={"/cocktail"}
          className={`${style.visual_item} ${style.item_behance}`}
        >
          <Image src={cocktailMain} alt="cocktail" width={420} height={400} />
        </Link>
        <Link
          href={"/posters"}
          className={`${style.visual_item} ${style.item_cyberpunk}`}
        >
          <Image
            src={posters}
            alt="posters"
            width={696}
            height={400}
            unoptimized
          />
        </Link>
      </div>
    </section>
  );
}
