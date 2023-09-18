import React from "react";
import stylesNews from "@/styles/news.module.css";

const NewsText = ({ text }: any) => {
  return (
    <>
      <div className={stylesNews["text-news-container"]}>
        <p className={stylesNews["text-news"]}>
          {text}
        </p>
      </div>
    </>
  );
};

export default NewsText;
