import common from "@/styles/common.module.css";
import { AVODARK } from "../avodark";

export default function AvodarkAudit() {
  return (
    <section>
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{AVODARK.audit.title}</div>
        <div>
          <p className={common["section-subtitle"]}>{AVODARK.audit.subtitle}</p>
          <p className={common["section-description"]}>
            {AVODARK.audit.description}
          </p>
        </div>
      </div>
    </section>
  );
}
