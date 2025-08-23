import common from "@/styles/common.module.css";
import { CYBERPUNK } from "../cyberpunkData";
import EnumBlock from "@/components/enumBlock/enumBlock";
import cyberpunkUserImage from "../../../../public/cyberpunk/cyberpunkUser.png";
import Image from "next/image";
import ButtonLink from "@/components/button/button-link";

export const CyberpunkUser = () => {
  return (
    <section>
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{CYBERPUNK.user.title}</div>
        <div>
          <p className={common["section-subtitle"]}>
            {CYBERPUNK.user.subtitle}
          </p>
          <p className={common["section-description"]}>
            {CYBERPUNK.user.description}
          </p>
          <EnumBlock
            title={CYBERPUNK.user.key}
            items={CYBERPUNK.user.keyList}
          />
          <div className="flex justify-start flex-col gap-4 text-[28px] lg:flex-row lg:items-end ">
            <Image
              src={cyberpunkUserImage}
              alt="cyberpunk user"
              width={260}
              height={430}
            />
            <ButtonLink
              text={"details"}
              size={44}
              link={"/cyberpunk"}
              // className={}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
