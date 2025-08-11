import common from "@/styles/common.module.css";
import { AVODARK } from "../avodark";
import Image from "next/image";
import token from "../../../../public/avoDark/avodarkToken.png";
export default function AvodarkToken() {
  return (
    <section>
      <div className={common["section-container"]}>
        <div className={common["section-title"]}>{AVODARK.token.title}</div>
        <div>
          <p className={common["section-subtitle"]}>{AVODARK.token.subtitle}</p>
          <p className={common["section-description"]}>
            {AVODARK.token.description}
          </p>
          <Image
            src={token}
            alt="token"
            width={729}
            height={352}
            style={{ margin: "32px 0" }}
          />
          <p className={common["section-description--title"]}>
            {AVODARK.token.tokens}
          </p>
          <p className={common["section-description"]}>
            {AVODARK.token.description1}
          </p>
        </div>
      </div>
    </section>
  );
}
