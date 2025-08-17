import common from "@/styles/common.module.css";
import { REDESIGNING } from "../redesigningData";
import redesigningIterationImage from "../../../../public/redesigning/redesigningExampleIteration.png";
import redesigningVisualImage from "../../../../public/redesigning/redesigningExampleVisual.png";
import Image from "next/image";
export const RedesigningExamples = () => {
  return (
    <section>
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>
          {REDESIGNING.examples.title}
        </div>
        <div>
          <p className={common["section-subtitle"]}>
            {REDESIGNING.examples.subtitle}
          </p>
          <p className={common["section-description"]}>
            {REDESIGNING.examples.description}
          </p>
          <Image
            src={redesigningIterationImage}
            alt="redesigning"
            width={730}
            height={500}
            style={{ margin: "32px 0 44px" }}
          />
          <p className={common["section-subtitle"]}>
            {REDESIGNING.examples.subtitle1}
          </p>
          <p className={common["section-description"]}>
            {REDESIGNING.examples.description1}
          </p>
          <Image
            src={redesigningVisualImage}
            alt="redesigning"
            width={730}
            height={500}
            style={{ margin: "32px 0 44px" }}
          />
        </div>
      </div>
    </section>
  );
};
