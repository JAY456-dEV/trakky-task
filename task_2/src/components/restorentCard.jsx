import React from "react";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Mousewheel, Pagination } from "swiper/modules";
import { restaurants } from "../data";
import CommonCard from "./commonCard";

const Restaurant = ({ restaurant }) => {
    return (
        <>
            <CommonCard restaurant={restaurant} />
        </>
    );
};

const RestaurantSlider = () => {

    return (
        <>
            <p className='text-2xl font-bold capitalize pt-4'>Top restaurant chains in Ahemedabad</p>
            <Swiper
                slidesPerView={1.1}
                spaceBetween={15}
                freeMode={true}
                mousewheel={true}
                modules={[FreeMode, Mousewheel]}
                breakpoints={{
                    480: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 35,
                    },
                }}
                className="mySwiper"
            >
                {[...restaurants].sort(() => Math.random() - 0.5).map((restaurant, index) => (
                    <SwiperSlide key={index}>
                        <Restaurant restaurant={restaurant} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default RestaurantSlider;
