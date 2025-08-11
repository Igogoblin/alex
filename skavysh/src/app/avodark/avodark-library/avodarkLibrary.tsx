import common from "@/styles/common.module.css";
import { AVODARK } from "../avodark";
import IndicatorsData from "@/components/indicators/indicators-data";

export default function AvodarkLibrary() {
  return (
    <section>
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{AVODARK.library.title}</div>
        <div>
          <p className={common["section-subtitle"]}>
            {AVODARK.library.subtitle}
          </p>
          <p className={common["section-description"]}>
            {AVODARK.library.description}
          </p>
          <IndicatorsData results={AVODARK.results} />
        </div>
      </div>
    </section>
  );
}
