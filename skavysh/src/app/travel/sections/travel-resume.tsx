import common from "@/styles/common.module.css";
import { TRAVEL } from "../travelData";
import IndicatorsData from "@/components/indicators/indicators-data";
export const TravelResume = () => {
  return (
    <section>
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{TRAVEL.resume.title}</div>
        <div>
          <p className={common["section-subtitle"]}>{TRAVEL.resume.subtitle}</p>
          <IndicatorsData results={TRAVEL.resume.results} />
          <p className={common["section-description"]}>
            {TRAVEL.resume.description}
          </p>
        </div>
      </div>
    </section>
  );
};
