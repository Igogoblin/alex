import common from "@/styles/common.module.css";
import { REDESIGNING } from "../redesigningData";
import redesigningVersionBasic from "../../../../public/redesigning/redesigningVersionBasic.png";
import redesigningImage1 from "../../../../public/redesigning/redesigningVersionNew1.png";
import redesigningImage2 from "../../../../public/redesigning/redesigningVersionNew2.png";
import style from "../redesigning.module.css";
import Image from "next/image";

export const RedesigningVersion = () => {
  return (
    <section className={style.redesigning__version}>
      <div className={style.version_item}>
        <p className={common["section-description--title"]}>
          {REDESIGNING.version.subtitle}
        </p>
        <Image
          src={redesigningVersionBasic}
          alt="redesigning"
          width={563}
          height={674}
        />
        <p className={common["section-text"]}>{REDESIGNING.version.text}</p>
      </div>
      <div className={style.version_item}>
        <p className={common["section-description--title"]}>
          {REDESIGNING.version.subtitle1}
        </p>
        <Image
          src={redesigningImage1}
          alt="redesigning"
          width={563}
          height={398}
          className={style.version_image1}
        />
        <Image
          src={redesigningImage2}
          alt="redesigning"
          width={563}
          height={398}
          className={style.version_image2}
        />
        <p className={common["section-text"]}>{REDESIGNING.version.text1}</p>
      </div>
    </section>
  );
};
