import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { restaurants } from "../data";
import CommonCard from "./commonCard";

export const RestaurantListData = ({ restaurant }) => {
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <>
            <CommonCard toggleLike={toggleLike} restaurant={restaurant} isLiked={isLiked} />
        </>
    );
};
const RestaurantList = () => {

    return (
        <>
            <h3 className="text-2xl font-semibold py-3">Top Rated Near You</h3>
            <Swiper
                slidesPerView={1.2}
                spaceBetween={15}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                className="mySwiper"
                breakpoints={{
                    480: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 35,
                    },
                }}
            >
                {[...restaurants].sort(() => Math.random() - 0.5).map((restaurant) => (
                    <SwiperSlide key={restaurant.id}>
                        <RestaurantListData restaurant={restaurant} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default RestaurantList;
