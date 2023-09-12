import React from "react";
import stylesNews from "@/styles/news.module.css";
import NewsScreen from "./NewsScreen";
import NewsData from "./NewsData";
import NewsHeader from "./NewsHeader";
import NewsText from "./NewsText";
import NewsButton from "./NewsButton";

const NewsContainer = () => {
  return (
    <>
      <div className={stylesNews["news-container"]}>
        <NewsScreen />
        <NewsData />
        <NewsHeader />
        <NewsText />
        <NewsButton/>
      </div>
    </>
  );
};

export default NewsContainer;
