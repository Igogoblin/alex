import common from "@/styles/common.module.css";
import { TRAVEL } from "../travelData";
import project from "../../../../public/travel/travelProject.png";
import Image from "next/image";
import EnumBlock from "@/components/enumBlock/enumBlock";
export const TravelAbout = () => {
  return (
    <section id="about" className="my-[60px]">
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{TRAVEL.about.title}</div>

        <div>
          <p className={common["section-subtitle"]}>{TRAVEL.about.subtitle}</p>
          <p className={common["section-description"]}>
            {TRAVEL.about.description}
          </p>
          <p className={common["section-description"]}>
            {TRAVEL.about.description1}
          </p>
          <Image
            src={project}
            alt="project"
            width={729}
            height={447}
            style={{ margin: "32px 0" }}
          />
          <p className={common["section-description--title"]}>
            {TRAVEL.about.stack}
          </p>
          <p className={common["section-description"]}>
            {TRAVEL.about.stackList}
          </p>
          <EnumBlock title={TRAVEL.about.team} items={TRAVEL.about.teamList} />
          <p className={common["section-description--title"]}>
            {TRAVEL.about.role}
          </p>
          <p className={common["section-description"]}>
            {TRAVEL.about.description2}
          </p>
          <EnumBlock
            title={TRAVEL.about.roles}
            items={TRAVEL.about.rolesList}
          />
        </div>
      </div>
    </section>
  );
};
