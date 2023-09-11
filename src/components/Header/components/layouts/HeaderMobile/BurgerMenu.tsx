import styles from "../../../../../styles/header.module.css";
import FlagUK from "../../../../../assets/header/FlagEng";
import ArrDown from "../../../../../assets/ArrowDown";
import LogIn from "../../../../Button";
import { motion } from "framer-motion";
import NavListMobile from "@/components/Header/components/layouts/HeaderMobile/NavListMobile";

type Props = {
  toggleMenu: () => void;
  isMenuOpen: boolean;
};

export const BurgerMenu = ({ isMenuOpen, toggleMenu }: Props) => {
  return (
    <motion.div
      animate={{ left: isMenuOpen ? "50%" : "100%" }}
      className={styles["menu-container"]}
    >
      <motion.div
        animate={{ right: isMenuOpen ? "100%" : "300%" }}
        className={styles["overlay-close"]}
        onClick={toggleMenu}
      />

      <NavListMobile />
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
    </motion.div>
  );
};
