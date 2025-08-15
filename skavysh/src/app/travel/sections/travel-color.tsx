import common from "@/styles/common.module.css";
import { TRAVEL } from "../travelData";
import EnumBlock from "@/components/enumBlock/enumBlock";
import colorImage from "../../../../public/travel/travelColor.png";
import Image from "next/image";
export const TravelColor = () => {
  return (
    <div className="my-[60px]">
      <section>
        <div className={common["section-container"]}>
          <div className={common["section-title"]}>{TRAVEL.color.title}</div>
          <div>
            <p className={common["section-subtitle"]}>
              {TRAVEL.color.subtitle}
            </p>
            <p className={common["section-description"]}>
              {TRAVEL.color.description}
            </p>
            <EnumBlock title={TRAVEL.color.key} items={TRAVEL.color.keyList} />
          </div>
        </div>
      </section>
      <Image
        src={colorImage}
        alt="color"
        width={1140}
        height={600}
        style={{ margin: "44px 0 60px 0" }}
      />

      <section>
        <div className={common["section-container"]}>
          <div className={common["section-title"]}></div>
          <div>
            <p className={common["section-description--title"]}>
              {TRAVEL.color.subtitle1}
            </p>
            <p className={common["section-description"]}>
              {TRAVEL.color.description1}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
