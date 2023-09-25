import React, { useEffect, useState } from "react";
import stylesHeader from "@/styles/header.module.css";

const HeaderNavMenu = () => {
  const [activateSection, setActiveSection] = useState("");

  useEffect(() => {
    if (activateSection) {
      const targetSection = document.getElementById(activateSection);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [activateSection]);

  const handleNavItemClick =
    ({ sectionId }: any) =>
    ({ e }: any) => {
      e.preventDefault();
      setActiveSection(sectionId);
    };

  return (
    <ul className={stylesHeader["context-menu-container"]}>
      <li className={stylesHeader["menu-items"]}>
        <a href="#about-section">About Us</a>
      </li>
      <li className={stylesHeader["menu-items"]}>
        <a href="#news-section">News</a>
      </li>
      <li className={stylesHeader["menu-items"]}>
        <a href="#oper-section">Operations</a>
      </li>
    </ul>
  );
};

export default HeaderNavMenu;
