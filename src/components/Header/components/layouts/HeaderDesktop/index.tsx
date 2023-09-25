import React from "react";
import stylesHeader from "@/styles/header.module.css";
import LogIn from "@/components/Button";
import HeaderNavMenu from "@/components/Header/components/layouts/HeaderDesktop/components/HeaderNavMenu";
import LanguageSelector from "@/components/Header/components/layouts/HeaderDesktop/components/LanguageSelector";

const HeaderDesktop = () => {
  return (
    <>
      <HeaderNavMenu />
      <div className={stylesHeader["flex"]}>
        <LanguageSelector />
        <div className={stylesHeader["btn-container"]}>
          <LogIn btnText="Log In" />
        </div>
      </div>
    </>
  );
};

export default HeaderDesktop;
