import common from "@/styles/common.module.css";
import { COCKTAIL } from "../cocktailData";
import EnumBlock from "@/components/enumBlock/enumBlock";
import Image from "next/image";
import cocktailSystemExtra from "../../../../public/cocktail/cocktailSystemExtra.png";
import cocktailSystemStrong from "../../../../public/cocktail/cocktailSystemStrong.png";
import cocktailSystemMedium from "../../../../public/cocktail/cocktailSystemMedium.png";
import cocktailSystemLight from "../../../../public/cocktail/cocktailSystemLight.png";
import cocktailSystemWeak from "../../../../public/cocktail/cocktailSystemWeek.png";

const ColorSystem = [
  cocktailSystemExtra,
  cocktailSystemStrong,
  cocktailSystemMedium,
  cocktailSystemLight,
  cocktailSystemWeak,
];

export const CocktailVisual = () => {
  return (
    <section id="goal">
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{COCKTAIL.visual.title}</div>
        <div>
          <p className={common["section-subtitle"]}>
            {COCKTAIL.visual.subtitle}
          </p>
          <p className={common["section-description"]}>
            {COCKTAIL.visual.description}
          </p>
          <EnumBlock
            title={COCKTAIL.visual.key}
            items={COCKTAIL.visual.keyList}
          />
          <p className={common["section-description-title"]}>
            {COCKTAIL.visual.colorSystem}
          </p>
          <div className="flex flex-row gap-3 mt-4 flex-wrap">
            {ColorSystem.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`color system ${index}`}
                width={105}
                height={140}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
