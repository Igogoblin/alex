import common from "@/styles/common.module.css";
import { TRAVEL } from "../travelData";
import EnumBlock from "@/components/enumBlock/enumBlock";
import typographyImage from "../../../../public/travel/travelTypography.png";
import Image from "next/image";
export const TravelTypography = () => {
  return (
    <section className="my-[60px]">
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{TRAVEL.typography.title}</div>
        <div>
          <p className={common["section-subtitle"]}>
            {TRAVEL.typography.subtitle}
          </p>
          <p className={common["section-description"]}>
            {TRAVEL.typography.description}
          </p>
          <EnumBlock
            title={TRAVEL.typography.key}
            items={TRAVEL.typography.keyList}
          />
        </div>
      </div>
      <Image src={typographyImage} alt="typography" width={1140} height={560} />
    </section>
  );
};
