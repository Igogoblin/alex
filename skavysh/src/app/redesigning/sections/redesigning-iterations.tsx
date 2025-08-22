import common from "@/styles/common.module.css";
import { REDESIGNING } from "../redesigningData";
import EnumBlock from "@/components/enumBlock/enumBlock";
export const RedesigningIterations = () => {
  return (
    <section>
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>
          {REDESIGNING.iterations.title}
        </div>
        <div>
          <p className={common["section-subtitle"]}>
            {REDESIGNING.iterations.subtitle}
          </p>
          <p className={common["section-description"]}>
            {REDESIGNING.iterations.description}
          </p>
          <EnumBlock
            title={REDESIGNING.iterations.key}
            items={REDESIGNING.iterations.keyList}
          />
        </div>
      </div>
    </section>
  );
};
