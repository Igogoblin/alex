import common from "@/styles/common.module.css";
import { COCKTAIL } from "../cocktailData";
import EnumBlock from "@/components/enumBlock/enumBlock";

export const CocktailDesign = () => {
  return (
    <section>
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{COCKTAIL.design.title}</div>
        <div>
          <p className={common["section-subtitle"]}>
            {COCKTAIL.design.subtitle}
          </p>
          <p className={common["section-description"]}>
            {COCKTAIL.design.description}
          </p>
        </div>
      </div>
    </section>
  );
};
