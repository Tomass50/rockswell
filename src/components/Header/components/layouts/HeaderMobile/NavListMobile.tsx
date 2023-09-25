import React from "react";
import styles from "../../../../../styles/header.module.css";

const NavListMobile = () => {
  return (
    <ul className={styles["burger-menu-list"]}>
      <li className={styles["burger-text"]}>
        <a href="#about-section">About Us</a>
      </li>
      <li className={styles["burger-text"]}>
        <a href="#news-section">News</a>
      </li>
      <li className={styles["burger-text"]}>
        <a href="#oper-section">Operations</a>
      </li>
    </ul>
  );
};

export default NavListMobile;
