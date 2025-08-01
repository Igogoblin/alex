import Image from "next/image";
import childrenMain from "../../../public/children/paynetChildrenMain.jpg";
import style from "./children.module.css";
import ButtonLink from "@/components/button/button-link";

export default function PaynetChildren() {
  return (
    <section className={style.children}>
      <div>
        <h2 className={style.title}>
          Paynet social project for children with disabilities
        </h2>
        <ButtonLink text={"show case"} link={"/children"} size={24} />
      </div>

      <Image
        src={childrenMain}
        alt="paynet children"
        width={730}
        height={400}
      />
    </section>
  );
}
