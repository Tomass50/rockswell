import React from "react";
import styles from "../../../../../styles/header.module.css";

const NavListMobile = () => {
  return (
    <ul className={styles["burger-menu-list"]}>
      <li className={styles["burger-text"]}>Contacts</li>
      <li className={styles["burger-text"]}>News</li>
      <li className={styles["burger-text"]}>Our Terminals</li>
    </ul>
  );
};

export default NavListMobile;
