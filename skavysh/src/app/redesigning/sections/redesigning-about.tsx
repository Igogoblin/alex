import common from "@/styles/common.module.css";
import { REDESIGNING } from "../redesigningData";
import EnumBlock from "@/components/enumBlock/enumBlock";
export const RedesigningAbout = () => {
  return (
    <section id="about">
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{REDESIGNING.about.title}</div>
        <div>
          <p className={common["section-subtitle"]}>
            {REDESIGNING.about.subtitle}
          </p>
          <p className={common["section-description"]}>
            {REDESIGNING.about.description}
          </p>
          <EnumBlock
            title={REDESIGNING.about.team}
            items={REDESIGNING.about.teamList}
          />
          <p className={common["section-description--title"]}>
            {REDESIGNING.about.users}
          </p>
          <p className={common["section-description"]}>
            {REDESIGNING.about.description1}
          </p>
          <p className={common["section-description--title"]}>
            {REDESIGNING.about.challenges}
          </p>
          <p className={common["section-description"]}>
            {REDESIGNING.about.description2}
          </p>
          <EnumBlock
            title={REDESIGNING.about.challenges1}
            items={REDESIGNING.about.challengesList}
          />
        </div>
      </div>
    </section>
  );
};
