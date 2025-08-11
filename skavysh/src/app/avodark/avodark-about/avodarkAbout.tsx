import common from "@/styles/common.module.css";
// import style from "../avoDark.module.css";
import { AVODARK } from "../avodark";
import ButtonLink from "@/components/button/button-link";
import EnumBlock from "@/components/enumBlock/enumBlock";

export default function AvodarkAbout() {
  return (
    <section id="about">
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{AVODARK.about.title}</div>
        <div>
          <p className={common["section-subtitle"]}>{AVODARK.about.subtitle}</p>
          <div className="flex gap-[24px] my-[16px]">
            <ButtonLink text={"AppStore"} link="#" size={44}></ButtonLink>
            <ButtonLink text={"GooglePlay"} link="#" size={44}></ButtonLink>
          </div>

          <p className={common["section-description"]}>
            {AVODARK.about.description}
          </p>
          <p className={`${common["section-description--title"]} mt-[32px]`}>
            {AVODARK.about.role}
          </p>
          <p className={common["section-description"]}>
            {AVODARK.about.roleList}
          </p>
          <EnumBlock
            title={AVODARK.about.problem}
            items={AVODARK.about.problemList}
          />
          <EnumBlock
            title={AVODARK.about.project}
            items={AVODARK.about.projectList}
          />
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
