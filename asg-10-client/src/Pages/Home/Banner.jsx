import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { Typewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto h-[580px] rounded-md shadow-sm mb-16">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={50}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        className="w-full h-full rounded-lg p-10 text-center"
      >
        <SwiperSlide className="relative">
          <img
            src="https://images.pexels.com/photos/5667033/pexels-photo-5667033.jpeg?_gl=1*188mres*_ga*MTkxNjc2NjI4My4xNzY1MDQ5Mzc5*_ga_8JE65Q40S6*czE3NjUwNjA5NjUkbzMkZzEkdDE3NjUwNjEwMzAkajYwJGwwJGgw"
            className="w-full h-full object-cover"
          />

          <div className="absolute flex items-center justify-center text-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] top-0 left-0">
            <div className="text-white space-y-7 w-3/4 lg:w-1/2">
              <h2 className="text-5xl font-bold">
                <Typewriter
                  words={["Find the perfect furry friend for you"]}
                  loop={1}
                  typeSpeed={70}
                />
                <Cursor />
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img
            src="https://images.pexels.com/photos/16390929/pexels-photo-16390929.jpeg?_gl=1*c0i5h*_ga*MTkxNjc2NjI4My4xNzY1MDQ5Mzc5*_ga_8JE65Q40S6*czE3NjUwNjA5NjUkbzMkZzEkdDE3NjUwNjEwNjIkajI4JGwwJGgw"
            className="w-full h-full object-cover"
          />

          <div className="absolute flex items-center justify-center text-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] top-0 left-0">
            <div className="text-white space-y-7 w-3/4 lg:w-1/2">
              <h2 className="text-5xl font-bold">
                <Typewriter
                  words={["Adopt a pet and give them home."]}
                  loop={1}
                  typeSpeed={70}
                />
                <Cursor />
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img
            src="https://images.pexels.com/photos/7330190/pexels-photo-7330190.jpeg?_gl=1*c0i5h*_ga*MTkxNjc2NjI4My4xNzY1MDQ5Mzc5*_ga_8JE65Q40S6*czE3NjUwNjA5NjUkbzMkZzEkdDE3NjUwNjEwNjIkajI4JGwwJGgw"
            className="w-full h-full object-cover"
          />

          <div className="absolute flex items-center justify-center text-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] top-0 left-0">
            <div className="text-white space-y-7 w-3/4 lg:w-1/2">
              <h2 className="text-5xl font-bold">
                <Typewriter
                  words={["Every pet deserves love, care, and kindness."]}
                  loop={1}
                  typeSpeed={70}
                />
                <Cursor />
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
