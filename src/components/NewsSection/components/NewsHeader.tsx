import React from "react";
import stylesNews from "@/styles/news.module.css";

const NewsHeader = () => {
  return (
    <>
      <div className={stylesNews["news-header-container"]}>
        <h2 className={stylesNews["header"]}>Test of the shiploader</h2>
      </div>
    </>
  );
};

export default NewsHeader;
