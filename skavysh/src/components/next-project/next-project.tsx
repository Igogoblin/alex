import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import style from "./next-project.module.css";

type NextProjectProps = {
  link: string;
  image: StaticImageData;
};

export default function NextProject({ link, image }: NextProjectProps) {
  return (
    <Link href={link} className={style.btnNext}>
      next project
      <Image src={image} alt="arrow" width={137} height={60} unoptimized />
    </Link>
  );
}
