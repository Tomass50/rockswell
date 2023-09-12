import React from "react";
import stylesHeader from "@/styles/header.module.css";
import HeaderDesktop from "@/components/Header/components/layouts/HeaderDesktop";
import Container from "@/components/Container";
import Logo from "@/components/Header/components/Logo";
import HeaderMobile from "@/components/Header/components/layouts/HeaderMobile";
import LogoLabel from "@/components/Header/components/HeaderLabel";

export const Header = () => {
  return (
    <header className={stylesHeader["header-container"]}>
      <Container>
        <div className={stylesHeader["header-content"]}>
          <Logo />
          <LogoLabel />
          <HeaderDesktop />
          <HeaderMobile />
        </div>
      </Container>
    </header>
  );
};
