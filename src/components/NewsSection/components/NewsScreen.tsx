import React from "react";
import stylesNews from "@/styles/news.module.css";
import Src from "../../../assets/NewsScreen.svg";
import Image from "next/image";

const NewsScreen = ({ screenshot }: any) => {
  return (
    <div className={stylesNews["news-screen-container"]}>
      <Image
        className={stylesNews["news-screen-container-image"]}
        src={screenshot}
        alt=""
        width={10000}
        height={1}
      />
    </div>
  );
};

export default NewsScreen;
