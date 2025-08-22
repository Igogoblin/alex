"use client";
import { usePathname } from "next/navigation";
import style from "./header.module.css";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
const MenuBlock = () => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const isHomePage: boolean = pathname === "/";

  const [isOverDarkSection, setIsOverDarkSection] = useState(false);

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
  // на будущее если будет потребность с разными картинками на других страницах(темные и светлые)
  useEffect(() => {
    // Наблюдаем за видимостью секций
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.classList.contains("dark-section")) {
            // Если тёмная секция видна, включаем светлый текст
            setIsOverDarkSection(entry.isIntersecting);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1, // Триггер, когда 10% секции видно
      }
    );
    // Наблюдаем за всеми элементами с классом "dark-section"
    const darkSections = document.querySelectorAll(".dark-section");
    darkSections.forEach((section) => observer.observe(section));

    // Очистка при размонтировании компонента
    return () => {
      darkSections.forEach((section) => observer.unobserve(section));
    };
  }, [pathname]);
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
        <Link
          href={"/"}
          className={`${style.returning} ${
            isOverDarkSection ? style.returningLight : ""
          }`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.83398 12H19"
              stroke="#2B2D31"
              strokeWidth="1.5"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              d="M10 7L5 12L10 17"
              stroke="#2B2D31"
              strokeWidth="1.5"
              strokeLinecap="square"
              strokeLinejoin="bevel"
            />
          </svg>
          back
        </Link>
      )}
    </nav>
  );
};

export default MenuBlock;
