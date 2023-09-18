import React from "react";
import stylesNews from "@/styles/news.module.css";
import NewsScreen from "./NewsScreen";
import NewsData from "./NewsDate";
import NewsHeader from "./NewsHeader";
import NewsText from "./NewsText";
import NewsButton from "./NewsButton";

const NewsContainer = ({ data }: any) => {
  return (
    <div className={stylesNews["news-container"]}>
      <NewsScreen screenshot={data?.screenshot} />
      <NewsData date={data?.date} />
      <NewsHeader title={data?.title} />
      <NewsText text={data?.text} />
      <NewsButton />
    </div>
  );
};

export default NewsContainer;
