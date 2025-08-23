import common from "@/styles/common.module.css";
import { AVODARK } from "../avodarkData";
import IndicatorsData from "@/components/indicators/indicators-data";
import style from "../avoDark.module.css";
export default function AvodarkLibrary() {
  return (
    <section className={style.library}>
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
