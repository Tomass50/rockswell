import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import stylesHeader from "@/styles/header.module.css";
import LogoImage from "../../../assets/header/Logo.svg";
const Logo = () => {
  return (
    <motion.div animate={{ height: "100%" }}>
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
