import common from "@/styles/common.module.css";
import { TRAVEL } from "../travelData";
import EnumBlock from "@/components/enumBlock/enumBlock";
export const TravelDeveloper = () => {
  return (
    <section>
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{TRAVEL.developer.title}</div>
        <div>
          <p className={common["section-subtitle"]}>
            {TRAVEL.developer.subtitle}
          </p>
          <p className={common["section-description"]}>
            {TRAVEL.developer.description}
          </p>
          <EnumBlock
            title={TRAVEL.developer.key}
            items={TRAVEL.developer.keyList}
          />
        </div>
      </div>
    </section>
  );
};
