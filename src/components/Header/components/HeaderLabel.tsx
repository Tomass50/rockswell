import React, { useEffect, useState } from "react";
import Image from "next/image";
import stylesHeader from "@/styles/header.module.css";

const LogoLabel = () => {
  return (
    <>
      <h1 className={stylesHeader["logo-label"]}>Перший Термінал Вілково</h1>
    </>
  );
};

export default LogoLabel;
