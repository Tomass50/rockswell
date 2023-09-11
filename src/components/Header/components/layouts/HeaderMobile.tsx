import React from "react";
import { Burger } from "@/components/Header/components/Burger";
import { BurgerMenu } from "@/components/Header/components/BurgerMenu";

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  return (
    <>
      <Burger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default HeaderMobile;
