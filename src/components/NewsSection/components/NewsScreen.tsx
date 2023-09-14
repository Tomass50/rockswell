import React from "react";
import stylesNews from "@/styles/news.module.css";
import Src from "../../../assets/NewsScreen.svg";
import Image from "next/image";

const NewsScreen = () => {
  return (
    <>
      <div className={stylesNews["news-screen-container"]}>
        <Image src={Src} alt="" />
      </div>
    </>
  );
};

export default NewsScreen;
