import React, { useState } from "react";
import stylesHeader from "@/styles/header.module.css";
import FlagEng from "@/assets/header/FlagEng";
import ArrowDown from "@/assets/ArrowDown";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";

const OPTIONS = [
  {
    value: "en",
    label: "ENG",
    component: <FlagEng />,
  },
  {
    value: "de",
    label: "DEU",
    component: <FlagEng />,
  },
  {
    value: "uk",
    label: "UKR",
    component: <FlagEng />,
  },
];

const LanguageSelector = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [isHover, setIsHover] = useState(false);

  return (
    <section
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={stylesHeader["language-container"]}
    >
      <FlagEng />
      <ul className={stylesHeader["language-text"]}>
        {OPTIONS.find((item) => item.value === selectedLang)?.label}
      </ul>
      <AnimatePresence>
        {isHover && (
          <motion.ul
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 10, x: "-50%" }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className={stylesHeader["language-options"]}
          >
            {OPTIONS.map((option) => (
              <li
                key={option.value}
                className={stylesHeader["language-option"]}
                onClick={() => setSelectedLang(option.value)}
              >
                {option.component}
                {option.label}
                <div />
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LanguageSelector;
