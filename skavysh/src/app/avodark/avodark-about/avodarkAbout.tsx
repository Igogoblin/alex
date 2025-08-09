import common from "@/styles/common.module.css";
// import style from "../avoDark.module.css";
import { AVODARK } from "../avodark";
import ButtonLink from "@/components/button/button-link";

export default function AvodarkAbout() {
  return (
    <section id="about">
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{AVODARK.about.title}</div>
        <div>
          <p className={common["section-subtitle"]}>{AVODARK.about.subtitle}</p>
          <div className="flex gap-[24px] my-[26px]">
            <ButtonLink text={"AppStore"} link="#" size={44}></ButtonLink>
            <ButtonLink text={"GooglePlay"} link="#" size={44}></ButtonLink>
          </div>

          <p className={common["section-description"]}>
            {AVODARK.about.description}
          </p>
        </div>
      </div>
    </section>
  );
}
//   text,
//   link,
//   size,
//   isUp = false,
//   className = "",
