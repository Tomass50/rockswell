import React from "react";
import Slider from "react-slick";
import stylesNews from "@/styles/news.module.css";
import NewsContainer from "../components/NewsSection/components/NewsContainer";

const NewsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, // Обратите внимание на правильное название параметра
  };

  return (
    <div
      className={`${stylesNews["block-news"]} ${stylesNews["carousel-container"]}`}
    >
      <Slider {...settings}>
        <div>
          <NewsContainer />
        </div>
        <div>
          <NewsContainer />
        </div>
        <div>
          <NewsContainer />
        </div>
      </Slider>
    </div>
  );
};

export default NewsCarousel;
