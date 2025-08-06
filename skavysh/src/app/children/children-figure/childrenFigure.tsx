import style from "../children.module.css";
import { ChildrenData } from "../children-data";
import EnumBlock from "@/components/enumBlock/enumBlock";
import IndicatorsData from "@/components/indicators/indicators-data";
export default function ChildrenFigure() {
  return (
    <section>
      <div className={style.about_container}>
        <div className={style.about_title}>{ChildrenData.figure.title}</div>
        <div className={style.about_subtitle}>
          <p className={style.subtitle_text}>{ChildrenData.figure.subtitle}</p>

          <p className={style.subtitle_description}>
            {ChildrenData.figure.text1}
          </p>
          <div className={style.results}>
            <IndicatorsData results={ChildrenData.results} />
          </div>
          <EnumBlock
            title={ChildrenData.figure.details}
            items={ChildrenData.figure.detailsList}
          />
        </div>
      </div>
    </section>
  );
}
