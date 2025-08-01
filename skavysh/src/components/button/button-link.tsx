import Link from "next/link";
import ArrowIcon from "../../../public/arrowUpRight.svg";
import Image from "next/image";
import style from "./button-link.module.css";
interface IbuttonLinkProps {
  text: string;
  link: string;
  size: number;
}

export default function ButtonLink({ text, link, size }: IbuttonLinkProps) {
  return (
    <Link href={link} passHref className={style.link}>
      {text}
      <Image src={ArrowIcon} alt="arrow" width={size} height={size} />
    </Link>
  );
}
