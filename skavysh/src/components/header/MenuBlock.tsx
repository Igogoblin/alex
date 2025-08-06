"use client";
import { usePathname } from "next/navigation";
import style from "./header.module.css";
import Link from "next/link";
import arrowLeft from "../../../public/arrowLeft.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
const MenuBlock = () => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const isHomePage: boolean = pathname === "/";
  const menuItems = isHomePage
    ? [
        { text: "product cases", href: "#product" },
        { text: "visual design", href: "#visual" },
        { text: "contact", href: "#contact" },
      ]
    : [
        { text: "works", href: "#works" },
        { text: "about me", href: "#about" },
        { text: "contact", href: "#contact" },
      ];

  useEffect(() => {
    console.log("isHomePage", isHomePage);
    console.log("window.location.hash", window.location.hash);
    console.log("aktiveHash", activeHash);
    if (isHomePage) {
      const handleHashChange = () => {
        setActiveHash(window.location.hash);
      };
      handleHashChange();
      window.addEventListener("hashchange", handleHashChange);
      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    } else {
      setActiveHash("");
    }
  }, [isHomePage]);
  return (
    <nav className={style.menuBlock}>
      {menuItems.map((item, index) => {
        // const isActive = isHomePage && activeHash === "#" + item.split(" ")[0];
        console.log(activeHash);
        const isActive = isHomePage && activeHash === item.href;
        return (
          <Link
            href={`${item.href}`}
            key={index}
            className={`${isActive ? style.activeLink : style.passiveLink}`}
          >
            {item.text}
          </Link>
        );
      })}
      {!isHomePage && (
        <Link href={"/"} className={style.returning}>
          <Image
            src={arrowLeft}
            alt="arrow"
            width={24}
            height={24}
            unoptimized
          />
          back
        </Link>
      )}
    </nav>
  );
};

export default MenuBlock;
