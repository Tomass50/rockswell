import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import stylesHeader from "@/styles/header.module.css";
import LogoImage from "../../../assets/header/Logo.svg";
const Logo = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("scroll", () => {
        setScrolled(window.scrollY > 0);
      });
    }
    return () => {
      if (window !== undefined) {
        window.removeEventListener("scroll", () => {
          setScrolled(window.scrollY > 0);
        });
      }
    };
  }, []);

  return (
    <motion.div
      animate={{
        height: scrolled ? "100%" : "150%",
        y: scrolled ? "0%" : 48,
      }}
    >
      <Image
        className={stylesHeader["header-logo"]}
        src={LogoImage}
        alt={"Logo"}
        quality={100}
        width={1000}
        height={1000}
      />
    </motion.div>
  );
};

export default Logo;
