import common from "@/styles/common.module.css";
import { CYBERPUNK } from "../cyberpunkData";
import EnumBlock from "@/components/enumBlock/enumBlock";

export const CyberpunkAbout = () => {
  return (
    <section id="about">
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{CYBERPUNK.about.title}</div>
        <div>
          <p className={common["section-subtitle"]}>
            {CYBERPUNK.about.subtitle}
          </p>
          <p className={common["section-description"]}>
            {CYBERPUNK.about.description}
          </p>
          <EnumBlock
            title={CYBERPUNK.about.tools}
            items={CYBERPUNK.about.toolsList}
          />
          <p className={common["section-description--title"]}>
            {CYBERPUNK.about.constraints}
          </p>
          <p className={common["section-description"]}>
            {CYBERPUNK.about.description1}
          </p>
        </div>
      </div>
    </section>
  );
};
