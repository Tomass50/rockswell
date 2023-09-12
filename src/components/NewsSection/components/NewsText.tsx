import React from "react";
import stylesNews from "@/styles/news.module.css";

const NewsText = () => {
  return (
    <>
      <div className={stylesNews["news-text-container"]}>
        <p className={stylesNews["news-text"]}>
          Lorem ipsum dolor sit amet consectetur. Metus ac leo ut sit <br />{" "}
          vulputate duis blandit. Quam sed ridiculus malesuada nulla <br />{" "}
          volutpat massa.
        </p>
      </div>
    </>
  );
};

export default NewsText;
