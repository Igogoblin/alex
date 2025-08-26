import common from "@/styles/common.module.css";
import { COCKTAIL } from "../cocktailData";
import EnumBlock from "@/components/enumBlock/enumBlock";

export const CocktailGoal = () => {
  return (
    <section>
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{COCKTAIL.goal.title}</div>
        <div>
          <p className={common["section-subtitle"]}>{COCKTAIL.goal.subtitle}</p>
          <p className={common["section-description"]}>
            {COCKTAIL.goal.description}
          </p>
          <EnumBlock title={COCKTAIL.goal.key} items={COCKTAIL.goal.keyList} />
        </div>
      </div>
    </section>
  );
};
