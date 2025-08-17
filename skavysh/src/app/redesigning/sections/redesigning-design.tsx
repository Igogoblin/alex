import common from "@/styles/common.module.css";
import { REDESIGNING } from "../redesigningData";
import EnumBlock from "@/components/enumBlock/enumBlock";

export const RedesigningDesign = () => {
  return (
    <section>
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>
          {REDESIGNING.design.title}
        </div>
        <div>
          <p className={common["section-subtitle"]}>
            {REDESIGNING.design.subtitle}
          </p>
          <p className={common["section-description"]}>
            {REDESIGNING.design.description}
          </p>
          <EnumBlock
            title={REDESIGNING.design.key}
            items={REDESIGNING.design.keyList}
          />
        </div>
      </div>
    </section>
  );
};
