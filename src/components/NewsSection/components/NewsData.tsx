import React from "react";
import stylesNews from "@/styles/news.module.css";

const NewsData = () => {
  return (
    <>
      <div className={stylesNews["news-data-container"]}>
        <p className={stylesNews["data-text"]}>20</p>
        <p className={stylesNews["data-text"]}>August</p>
        <p className={stylesNews["data-text"]}>2023</p>
      </div>
    </>
  );
};

export default NewsData;
