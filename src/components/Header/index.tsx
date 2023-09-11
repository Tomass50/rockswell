import React, { useState } from "react";
import stylesHeader from "@/styles/header.module.css";
import stylesBtn from "@/styles/headerBtn.module.css";
import Search from "./components/FormSearch";
import Logo from "@/forms/assets/Logo.svg";
import SearchBtn from "./components/search";
import FlagUK from "./components/Flag1";
import ArrDown from "./components/down";
import LogIn from "./components/button";
import Image from "next/image";
import { Burger } from "./components/Burger";
import { BurgerMenu } from "./components/BurgerMenu";
import Meta from "../Meta";

export const Header = () => {
  const [search, setSearch] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  return (
    <div className={stylesHeader["header-container"]}>
      <div className={stylesHeader["context-menu-container"]}>
        <ul className={stylesHeader["menu-items"]}>contacts</ul>
        <ul className={stylesHeader["menu-items"]}>news</ul>
        <ul className={stylesHeader["menu-items"]}>our terminals</ul>
      </div>
      <div className={stylesHeader["search-container"]}>
        <ul className={stylesHeader["search-item"]}>search:</ul>
        <Search
          placeholder="Something..."
          typeInput="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className={stylesBtn["btn-search-container"]}>
          <SearchBtn />
        </button>
      </div>
      <div className={stylesHeader["language-container"]}>
        <ul className={stylesHeader["language-text"]}>language:</ul>
        <FlagUK />
        <ArrDown />
      </div>
      <div className={stylesHeader["btn-container"]}>
        <LogIn btnText="Log In"></LogIn>
      </div>
      <Burger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};
