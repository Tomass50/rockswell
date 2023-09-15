import React from "react";
import stylesNews from "@/styles/news.module.css";
import Title from "@/components/Title";
import NewsContainer from "./components/NewsContainer";
import Slick from "../Slick";

const NewsSection = () => {
  return (
    <>
      <Title className={stylesNews["header-text"]}>News</Title>
      <div className={stylesNews["news-block"]}>
        <NewsContainer />
        <NewsContainer />
        <NewsContainer />
      </div>
      <Slick />
    </>
  );
};

export default NewsSection;
