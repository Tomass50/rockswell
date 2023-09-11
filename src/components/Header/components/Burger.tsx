import styles from "../../../styles/header.module.css";

type Props = {
  toggleMenu: () => void;
  isMenuOpen: boolean;
};

export const Burger = ({ toggleMenu, isMenuOpen }: Props) => {
  return (
    <div className={styles["burger-menu"]} onClick={toggleMenu}>
      <div
        className={`${styles["bar"]} ${isMenuOpen ? styles["open"] : ""}`}
      ></div>
      <div
        className={`${styles["bar"]} ${isMenuOpen ? styles["open"] : ""}`}
      ></div>
      <div
        className={`${styles["bar"]} ${isMenuOpen ? styles["open"] : ""}`}
      ></div>
    </div>
  );
};
