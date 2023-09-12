import React from "react";
import stylesNews from "@/styles/news.module.css";
import Title from "@/components/Title";
import NewsContainer from "./components/NewsContainer";

const NewsSection = () => {
  return (
    <>
      <Title className={stylesNews["header-text"]}>News</Title>
      <div className={stylesNews["block-news"]}>
        <NewsContainer />
        <NewsContainer />
        <NewsContainer />
      </div>
    </>
  );
};

export default NewsSection;
