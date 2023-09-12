import React from "react";
import stylesNews from "@/styles/news.module.css";
import stylesBtn from "@/styles/headerBtn.module.css";

const NewsButton = () => {
  return (
    <>
      <button
        className={`${stylesBtn["btn-container"]} ${stylesNews["btn-container"]}`}
      >
        Read
      </button>
    </>
  );
};

export default NewsButton;
