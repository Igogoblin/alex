import Image from "next/image";
import childrenHead from "../../../../public/children/childrenHead.jpg";
import style from "../children.module.css";

export default function ChildrenHead() {
  return (
    <section className={style.children__head}>
      <h1 className={style.children__head_title}>
        Paynet social project for children with disabilities
      </h1>
      <Image src={childrenHead} alt="children head" width={1140} height={500} />
    </section>
  );
}
