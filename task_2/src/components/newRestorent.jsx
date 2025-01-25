import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { restaurants } from "../data";

// Restaurant Data Component
export const RestaurantListData = ({ restaurant }) => {
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className="hover:scale-95 transition-all duration-200 cursor-pointer mt-4 mb-2">
            <div className="relative w-full h-48 sm:h-56 lg:h-64">
                <img
                    src={restaurant.img}
                    alt={restaurant.name}
                    className="w-full h-full rounded-2xl object-cover"
                />

                <div className="absolute top-3 left-3 right-3 z-20 flex justify-between items-center">
                    <div className="bg-orange-500 text-white px-2.5 py-1 rounded-md text-xs sm:text-sm font-medium">
                        Free Delivery
                    </div>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleLike();
                        }}
                        className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow-md hover:bg-red-50 transition-all duration-200"
                    >
                        {isLiked ? (
                            <AiFillHeart className="w-6 h-6 text-red-500" />
                        ) : (
                            <AiOutlineHeart className="w-6 h-6 text-gray-500" />
                        )}
                    </button>
                </div>

                <div className="text-base sm:text-xl text-zinc-50 font-extrabold absolute bottom-2 left-3 z-10">
                    {restaurant.name}
                </div>
                <div className="bg-custom-gradient w-full h-full rounded-2xl absolute bottom-0 z-0"></div>
            </div>

            <div className="w-full mt-2 px-2 sm:px-4">
                <p className="text-[1rem] sm:text-[1.25rem] font-semibold">{restaurant.name}</p>
                <div className="flex items-center gap-1 mt-1">
                    <div className="bg-green-700 w-[22px] h-[22px] flex items-center justify-center rounded-full">
                        <FaStar color="white" />
                    </div>
                    <p className="text-sm sm:text-base font-semibold">{restaurant.rating}</p>
                    <div className="font-semibold">•</div>
                    <p className="text-sm sm:text-base font-semibold">{restaurant.deliveryTime}</p>
                </div>
                <div className="text-zinc-500 text-[0.875rem] sm:text-[1rem] mt-1 text-wrap break-words">
                    {restaurant.description}
                </div>
            </div>
        </div>
    );
};

// Restaurant Slider Component
const RestaurantList = () => {

    return (
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
            {restaurants.map((restaurant) => (
                <SwiperSlide key={restaurant.id}>
                    <RestaurantListData restaurant={restaurant} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default RestaurantList;
