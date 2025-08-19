import common from "@/styles/common.module.css";
import { CYBERPUNK } from "../cyberpunkData";
import EnumBlock from "@/components/enumBlock/enumBlock";

export const CyberpunkVisual = () => {
  return (
    <section>
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{CYBERPUNK.visual.title}</div>
        <div>
          <p className={common["section-subtitle"]}>
            {CYBERPUNK.visual.subtitle}
          </p>
          <p className={common["section-description"]}>
            {CYBERPUNK.visual.description}
          </p>
          <EnumBlock
            title={CYBERPUNK.visual.key}
            items={CYBERPUNK.visual.keyList}
          />
        </div>
      </div>
    </section>
  );
};
