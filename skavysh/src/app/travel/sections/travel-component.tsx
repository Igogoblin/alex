import common from "@/styles/common.module.css";
import { TRAVEL } from "../travelData";
import EnumBlock from "@/components/enumBlock/enumBlock";
export const TravelComponent = () => {
  return (
    <section>
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{TRAVEL.component.title}</div>
        <div>
          <p className={common["section-subtitle"]}>
            {TRAVEL.component.subtitle}
          </p>
          <p className={common["section-description"]}>
            {TRAVEL.component.description}
          </p>
          <EnumBlock
            title={TRAVEL.component.key}
            items={TRAVEL.component.keyList}
          />
        </div>
      </div>
    </section>
  );
};
