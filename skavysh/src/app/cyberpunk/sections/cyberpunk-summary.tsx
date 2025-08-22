import common from "@/styles/common.module.css";
import { CYBERPUNK } from "../cyberpunkData";
import EnumBlock from "@/components/enumBlock/enumBlock";

export const CyberpunkSummary = () => {
  return (
    <section>
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{CYBERPUNK.summary.title}</div>
        <div>
          <p className={common["section-subtitle"]}>
            {CYBERPUNK.summary.subtitle}
          </p>
          <p className={common["section-description"]}>
            {CYBERPUNK.summary.description}
          </p>
          <EnumBlock
            title={CYBERPUNK.summary.key}
            items={CYBERPUNK.summary.keyList}
          />
        </div>
      </div>
    </section>
  );
};
