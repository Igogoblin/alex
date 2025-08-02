import Link from "next/link";
import ArrowIcon from "../../../public/arrowUpRight.svg";
import ArrowUp from "../../../public/arrowUp.svg";
import Image from "next/image";
import style from "./button-link.module.css";
interface IbuttonLinkProps {
  text: string;
  link: string;
  size: number;
  isUp?: boolean;
}

export default function ButtonLink({
  text,
  link,
  size,
  isUp = false,
}: IbuttonLinkProps) {
  return (
    <Link href={link} passHref className={style.link}>
      {text}
      <Image
        src={isUp ? ArrowUp : ArrowIcon}
        alt="arrow"
        width={size}
        height={size}
      />
    </Link>
  );
}
