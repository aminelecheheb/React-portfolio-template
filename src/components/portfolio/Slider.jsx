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
          return (
            <SwiperSlide className="works">
              {page.map((project) => {
                const { img, title } = project;
                return (
                  <div className="project-container">
                    <img src={img} alt={title} />
                  </div>
                );
              })}
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide className="works">
          <div className="project-container"></div>
          <div className="project-container"></div>
          <div className="project-container"></div>
          <div className="project-container"></div>
          <div className="project-container"></div>
          <div className="project-container"></div>
        </SwiperSlide>
        <SwiperSlide className="works">
          <div className="project-container"></div>
          <div className="project-container"></div>
          <div className="project-container"></div>
          <div className="project-container"></div>
          <div className="project-container"></div>
          <div className="project-container"></div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default Slider;
