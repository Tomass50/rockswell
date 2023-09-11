import React from "react";
import stylesHeader from "@/styles/header.module.css";
import HeaderDesktop from "@/components/Header/components/layouts/HeaderDesktop";
import Container from "@/components/Container";
import HeaderMobile from "@/components/Header/components/layouts/HeaderMobile";
import Logo from "@/components/Header/components/Logo";

export const Header = () => {
  return (
    <header className={stylesHeader["header-container"]}>
      <Container>
        <div className={stylesHeader["header-content"]}>
          <Logo />

          <HeaderDesktop />
          <HeaderMobile />
        </div>
      </Container>
    </header>
  );
};
