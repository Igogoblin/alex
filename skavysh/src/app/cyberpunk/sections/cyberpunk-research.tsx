import common from "@/styles/common.module.css";
import { CYBERPUNK } from "../cyberpunkData";
import EnumBlock from "@/components/enumBlock/enumBlock";

export const CyberpunkResearch = () => {
  return (
    <section>
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>
          {CYBERPUNK.research.title}
        </div>
        <div>
          <p className={common["section-subtitle"]}>
            {CYBERPUNK.research.subtitle}
          </p>
          <p className={common["section-description"]}>
            {CYBERPUNK.research.description}
          </p>
          <EnumBlock
            title={CYBERPUNK.research.key}
            items={CYBERPUNK.research.keyList}
          />
          <p className={common["section-description"]}>
            {CYBERPUNK.research.description1}
          </p>
        </div>
      </div>
    </section>
  );
};
