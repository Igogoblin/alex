import common from "@/styles/common.module.css";
import { COCKTAIL } from "../cocktailData";
import EnumBlock from "@/components/enumBlock/enumBlock";

export const CocktailVisual = () => {
  return (
    <section id="goal">
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{COCKTAIL.goal.title}</div>
        <div>
          <p className={common["section-subtitle"]}>{COCKTAIL.goal.subtitle}</p>
          <p className={common["section-description"]}>
            {COCKTAIL.goal.description}
          </p>
          <EnumBlock title={COCKTAIL.goal.key} items={COCKTAIL.goal.keyList} />
          <p className={common["section-description-title"]}>
            {COCKTAIL.visual.colorSystem}
          </p>
        </div>
      </div>
    </section>
  );
};
