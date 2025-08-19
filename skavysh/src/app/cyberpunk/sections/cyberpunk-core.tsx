import common from "@/styles/common.module.css";
import { CYBERPUNK } from "../cyberpunkData";
import EnumBlock from "@/components/enumBlock/enumBlock";
import cyberpunkCoreImage from "../../../../public/cyberpunk/cyberpunkCore.png";
import Image from "next/image";

export const CyberpunkCore = () => {
  return (
    <section>
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{CYBERPUNK.core.title}</div>
        <div>
          <p className={common["section-subtitle"]}>
            {CYBERPUNK.core.subtitle}
          </p>
          <p className={common["section-description"]}>
            {CYBERPUNK.core.description}
          </p>
          <EnumBlock
            title={CYBERPUNK.core.key}
            items={CYBERPUNK.core.keyList}
          />
          <Image
            src={cyberpunkCoreImage}
            alt="cyberpunk core"
            width={729}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};
