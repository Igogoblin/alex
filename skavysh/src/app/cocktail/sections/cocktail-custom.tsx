import common from "@/styles/common.module.css";
import { COCKTAIL } from "../cocktailData";

export const CocktailCustom = () => {
  return (
    <section>
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{COCKTAIL.custom.title}</div>
        <div>
          <p className={common["section-subtitle"]}>
            {COCKTAIL.custom.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};
