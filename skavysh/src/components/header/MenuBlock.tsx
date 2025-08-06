"use client";
import { usePathname } from "next/navigation";
import style from "./header.module.css";
import Link from "next/link";
import arrowLeft from "../../../public/arrowLeft.svg";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
const MenuBlock = () => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const isHomePage: boolean = pathname === "/";
  const menuItems = useMemo(() => {
    return isHomePage
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
  }, [isHomePage]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting);
      if (visibleSection) {
        setActiveHash(`#${visibleSection.target.id}`);
      }
    });

    const sectionIds = menuItems.map((item) => item.href.replace("#", ""));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [pathname, menuItems]);
  return (
    <nav className={style.menuBlock}>
      {menuItems.map((item, index) => {
        // const isActive = isHomePage && activeHash === "#" + item.split(" ")[0];
        console.log(activeHash);
        const isActive = activeHash === item.href;
        return (
          <Link
            href={item.href}
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
