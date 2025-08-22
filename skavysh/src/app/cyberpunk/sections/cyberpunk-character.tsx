import common from "@/styles/common.module.css";
import { CYBERPUNK } from "../cyberpunkData";
import EnumBlock from "@/components/enumBlock/enumBlock";
import cyberpunkCharacterImage from "../../../../public/cyberpunk/cyberpunkCharacter.png";
import Image from "next/image";

export const CyberpunkCharacter = () => {
  return (
    <section>
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>
          {CYBERPUNK.character.title}
        </div>
        <div>
          <p className={common["section-subtitle"]}>
            {CYBERPUNK.character.subtitle}
          </p>
          <p className={common["section-description"]}>
            {CYBERPUNK.character.description}
          </p>
          <EnumBlock
            title={CYBERPUNK.character.key}
            items={CYBERPUNK.character.keyList}
          />
        </div>
      </div>
      <Image
        src={cyberpunkCharacterImage}
        alt="cyberpunk character"
        width={1140}
        height={745}
      />
    </section>
  );
};
