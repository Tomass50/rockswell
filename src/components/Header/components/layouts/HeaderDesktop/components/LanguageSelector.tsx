import React from "react";
import stylesHeader from "@/styles/header.module.css";
import FlagEng from "@/assets/header/FlagEng";
import ArrowDown from "@/components/Header/components/ArrowDown";

const LanguageSelector = () => {
  return (
    <div className={stylesHeader["language-container"]}>
      <ul className={stylesHeader["language-text"]}>language:</ul>
      <FlagEng />
      <ArrowDown />
    </div>
  );
};

export default LanguageSelector;
