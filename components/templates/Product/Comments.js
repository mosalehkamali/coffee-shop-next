import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import styles from '@/styles/Slider.module.css'

import TestimonialItem from "@/components/modules/TestimonialItem/TestimonialItem";

const Comments = ({ comments }) => {

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            TESTIMONIAL
          </h4>
          <h1 className="display-4">Product Comments</h1>
        </div>
        <div className="row">
          {

            <Swiper
              loop={true}
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 100,
                },
              }}
              modules={[Pagination]}
              className={styles.swiper}
            >
              {comments.map(comment => (<SwiperSlide className={styles.swiper_slide}>
                <TestimonialItem {...comment}></TestimonialItem>
              </SwiperSlide>))}
            </Swiper>
          }


        </div>
      </div>
    </div>
  );
};

export default Comments;
