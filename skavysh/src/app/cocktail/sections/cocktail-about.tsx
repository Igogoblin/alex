import common from "@/styles/common.module.css";
import { COCKTAIL } from "../cocktailData";
import EnumBlock from "@/components/enumBlock/enumBlock";

export const CocktailAbout = () => {
  return (
    <section id="about">
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{COCKTAIL.about.title}</div>
        <div>
          <p className={common["section-subtitle"]}>
            {COCKTAIL.about.subtitle}
          </p>
          <p className={common["section-description"]}>
            {COCKTAIL.about.description}
          </p>
          <EnumBlock
            title={COCKTAIL.about.tools}
            items={COCKTAIL.about.toolsList}
          />
          <EnumBlock
            title={COCKTAIL.about.constraints}
            items={COCKTAIL.about.constraintsList}
          />
        </div>
      </div>
    </section>
  );
};
