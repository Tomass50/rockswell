import React from "react";
import stylesNews from "@/styles/news.module.css";

const NewsDate = ({ date }: any) => {
  return (
    <div className={stylesNews["date-news-container"]}>
      <p className={stylesNews["date-text"]}>{date}</p>
    </div>
  );
};

export default NewsDate;
