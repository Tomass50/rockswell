import styles from "../../../styles/header.module.css";
import FlagUK from "../../../assets/header/FlagEng";
import ArrDown from "./ArrowDown";
import LogIn from "../../Button";

type Props = {
  toggleMenu: () => void;
  isMenuOpen: boolean;
};

export const BurgerMenu = ({ toggleMenu, isMenuOpen }: Props) => {
  return (
    <div
      className={`${styles["menu-container"]} ${
        isMenuOpen ? styles["open"] : ""
      }`}
    >
      <div className={styles["overlay-close"]} />
      <ul>
        <li className={styles["burger-text"]}>Contacts</li>
        <li className={styles["burger-text"]}>News</li>
        <li className={styles["burger-text"]}>Our Terminals</li>
      </ul>
      <div className={styles["language-container-burger"]}>
        <div className={styles["language-toggle"]}>
          <FlagUK />
          <p className={styles["language-text-burger"]}>UK</p>
          <button className={styles["btn-language-burger"]}>
            <ArrDown />
          </button>
        </div>
        <div className={styles["btn-container-burger"]}>
          <LogIn btnText="Log In"></LogIn>
        </div>
      </div>
    </div>
  );
};
