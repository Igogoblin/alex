import common from "@/styles/common.module.css";
import { REDESIGNING } from "../redesigningData";
import EnumBlock from "@/components/enumBlock/enumBlock";

export const RedesigningSummary = () => {
  return (
    <section>
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>
          {REDESIGNING.summary.title}
        </div>
        <div>
          <p className={common["section-subtitle"]}>
            {REDESIGNING.summary.subtitle}
          </p>
          <p className={common["section-description"]}>
            {REDESIGNING.summary.description}
          </p>
          <EnumBlock
            title={REDESIGNING.summary.key}
            items={REDESIGNING.summary.keyList}
          />
        </div>
      </div>
    </section>
  );
};
