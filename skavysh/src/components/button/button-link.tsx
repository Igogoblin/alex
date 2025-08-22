import Link from "next/link";
import style from "./button-link.module.css";
interface IbuttonLinkProps {
  text: string;
  link: string;
  size: number;
  isUp?: boolean;
  className?: string;
}

export default function ButtonLink({
  text,
  link,
  size,
  isUp = false,
  className = "",
}: IbuttonLinkProps) {
  return (
    <>
      {isUp ? (
        <a href={link} className={`${style.link} ${className}`}>
          {text}
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5.7597C12 11.227 12 13.5327 12 19"
              stroke="#323232"
              strokeWidth="1.5"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              d="M6.99805 10L11.999 4.99902L17 10"
              stroke="#323232"
              strokeWidth="1.5"
              strokeLinecap="square"
              strokeLinejoin="bevel"
            />
          </svg>
        </a>
      ) : (
        <Link href={link} passHref className={`${style.link} ${className}`}>
          {text}
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3931 7.60738L7.02539 16.9751"
              stroke="#2B2D31"
              strokeWidth="1.5"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              d="M9.97461 7.0249L16.9246 7.0739L16.9746 14.0249"
              stroke="#323232"
              strokeWidth="1.5"
              strokeLinecap="square"
              strokeLinejoin="bevel"
            />
          </svg>
        </Link>
      )}
    </>
  );
}
