import style from "../children.module.css";
import { ChildrenData } from "../children-data";
import EnumBlock from "@/components/enumBlock/enumBlock";

export default function ChildrenResume() {
  return (
    <section>
      <div className={style.about_container}>
        <div className={style.about_title}>{ChildrenData.resume.title}</div>
        <div className={style.children__resume_subtitle}>
          <p className={style.subtitle_text}>{ChildrenData.resume.subtitle}</p>
          <p className={style.subtitle_description}>
            {ChildrenData.resume.factors}
          </p>
          <EnumBlock
            title={ChildrenData.resume.factors}
            items={ChildrenData.resume.factorsList}
          />
        </div>
      </div>
    </section>
  );
}
