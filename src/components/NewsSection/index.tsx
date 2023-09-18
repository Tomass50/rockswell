import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from "react";
import stylesNews from "@/styles/news.module.css";
import Title from "@/components/Title";
import NewsContainer from "./components/NewsContainer";

const containerData = [
  {
    title: "Заголовок контейнера 1",
    date: "20 Semptember 2023",
    screenshot: "/news/NewsScreen.svg",
    text: "Lorem ipsum dolor sit amet consectetur. Metus ac leo ut sit vulputate wdfdsf dgsdfsdg ddsgdsgsdf wdgfsdgfdsgf asfasfadf",
  },
  {
    title: "Заголовок контейнера 2",
    date: "20 October 2023",
    screenshot: "/news/NewsScreen2.svg",
    text: "Текст контейнера 2",
  },
  {
    title: "Заголовок контейнера 3",
    date: "20 November 2023",
    screenshot: "/news/NewsScreen3.svg",
    text: "Текст контейнера 3",
  },
];
const NewsSection = () => {
  return (
    <>
      <Title className={stylesNews["header-text"]}>News</Title>
      <div className={`${stylesNews["news-block"]} swiper-container`}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {containerData.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <NewsContainer data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default NewsSection;
