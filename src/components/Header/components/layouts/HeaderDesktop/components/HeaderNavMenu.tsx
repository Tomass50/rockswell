import React from "react";
import stylesHeader from "@/styles/header.module.css";

const HeaderNavMenu = () => {
  return (
    <ul className={stylesHeader["context-menu-container"]}>
      <li className={stylesHeader["menu-items"]}>contacts</li>
      <li className={stylesHeader["menu-items"]}>news</li>
      <li className={stylesHeader["menu-items"]}>our terminals</li>
    </ul>
  );
};

export default HeaderNavMenu;
