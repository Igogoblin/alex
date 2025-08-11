import common from "@/styles/common.module.css";
import { AVODARK } from "../avodark";
import EnumBlock from "@/components/enumBlock/enumBlock";
export default function AvodarkColor() {
  return (
    <section>
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{AVODARK.color.title}</div>
        <div>
          <p className={common["section-subtitle"]}>{AVODARK.color.subtitle}</p>
          <p className={common["section-description"]}>
            {AVODARK.color.description}
          </p>
          <p className={common["section-description"]}>
            {AVODARK.color.description1}
          </p>
          <EnumBlock
            title={AVODARK.color.colors}
            items={AVODARK.color.colorList}
          />
        </div>
      </div>
    </section>
  );
}
