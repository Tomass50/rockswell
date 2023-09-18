import React from "react";
import stylesNews from "@/styles/news.module.css";

const NewsHeader = ({ title }: any) => {
  return (
    <>
      <div className={stylesNews["news-header-container"]}>
        <h2 className={stylesNews["header-news"]}>{title}</h2>
      </div>
    </>
  );
};

export default NewsHeader;
