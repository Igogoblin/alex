import style from "../children.module.css";
import { ChildrenData } from "../children-data";
import EnumBlock from "@/components/enumBlock/enumBlock";
import childrenAbout from "../../../../public/children/childrenAbout.jpg";
import Image from "next/image";
export default function ChildrenAbout() {
  return (
    <section className={style.children__about} id="about">
      <div className={style.about_container}>
        <div className={style.about_title}>{ChildrenData.about.title}</div>
        <div className={style.about_subtitle}>
          <p className={style.subtitle_text}>{ChildrenData.about.subtitle}</p>
          <p className={style.subtitle_description}>
            {ChildrenData.about.description}
          </p>
          <EnumBlock
            title={ChildrenData.about.role}
            items={ChildrenData.about.roles}
          />
          <EnumBlock
            title={ChildrenData.about.goals}
            items={ChildrenData.about.goalsList}
          />
          <EnumBlock
            title={ChildrenData.about.team}
            items={ChildrenData.about.teamList}
          />
          <Image
            src={childrenAbout}
            alt="children about"
            width={730}
            height={546}
          />
        </div>
      </div>
      <div className={style.about_container}>
        <div className={style.about_title}>{ChildrenData.concept.title}</div>
        <div className={style.about_subtitle}>
          <p className={style.subtitle_text}>{ChildrenData.concept.subtitle}</p>
          <p className={style.subtitle_description}>
            {ChildrenData.concept.text1}
          </p>
          <p className={style.subtitle_description}>
            {ChildrenData.concept.text2}
          </p>
        </div>
      </div>
    </section>
  );
}
