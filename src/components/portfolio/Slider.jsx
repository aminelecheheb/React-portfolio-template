import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { pages } from "./worksData";

const Slider = () => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper works-container"
      >
        {pages.map((page) => {
          const { pageId, data } = page;
          return (
            <SwiperSlide className="works" key={pageId}>
              {data.map((project) => {
                const { img, title, id } = project;
                return (
                  <div className="project-container" key={id}>
                    <img src={img} alt={title} />
                  </div>
                );
              })}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
