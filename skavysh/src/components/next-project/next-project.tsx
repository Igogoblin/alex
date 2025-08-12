import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import style from "./next-project.module.css";
import Container from "../container/container";

type NextProjectProps = {
  link: string;
  linkPrev?: string;
  image: StaticImageData;
  imagePrev?: StaticImageData;
  isBack?: boolean;
};

export default function NextProject({
  link,
  linkPrev,
  imagePrev,
  image,
  isBack = false,
}: NextProjectProps) {
  return (
    <Container>
      <div className={style.divider}>
        {isBack && linkPrev && imagePrev && (
          <Link href={linkPrev} className={style.btnPrev}>
            <Image
              src={imagePrev}
              alt="arrow"
              width={137}
              height={60}
              unoptimized
            />
            previous project
          </Link>
        )}
        <Link href={link} className={style.btnNext}>
          {" "}
          next project
          <Image src={image} alt="arrow" width={137} height={60} unoptimized />
        </Link>
      </div>
    </Container>
  );
}
