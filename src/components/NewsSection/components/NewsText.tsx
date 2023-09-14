import React from "react";
import stylesNews from "@/styles/news.module.css";

const NewsText = () => {
  return (
    <>
      <div className={stylesNews["text-news-container"]}>
        <p className={stylesNews["text-news"]}>
          Lorem ipsum dolor sit amet consectetur. Metus ac leo ut sit vulputate
          duis blandit. Quam sed ridiculus malesuada nulla volutpat massa. Lorem
          ipsum dolor sit amet consectetur. Metus ac leo ut sit vulputate duis
          blandit. Quam sed ridiculus malesuada nulla volutpat massa.
        </p>
      </div>
    </>
  );
};

export default NewsText;
