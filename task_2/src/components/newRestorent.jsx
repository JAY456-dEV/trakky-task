import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Restaurant Data Component
export const RestaurantListData = () => {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="hover:scale-95 transition-all duration-200 cursor-pointer mt-4 mb-2">
            <div className="relative w-full h-48 sm:h-56 lg:h-64">
                <img
                    src={`https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=`}
                    alt="Restaurant"
                    className="w-full h-full rounded-2xl object-cover"
                />

                <div className="absolute top-3 left-3 right-3 z-20 flex justify-between items-center">
                    <div className="bg-orange-500 text-white px-2.5 py-1 rounded-md text-xs sm:text-sm font-medium">
                        Free Delivery
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsLiked(!isLiked);
                        }}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-200"
                        style={{ minWidth: "2.5rem", minHeight: "2.5rem" }}
                    >
                        {isLiked ? (
                            <AiFillHeart className="w-5 h-5 text-red-500" />
                        ) : (
                            <AiOutlineHeart className="w-5 h-5 text-white" />
                        )}
                    </button>
                </div>

                <div className="text-base sm:text-xl text-zinc-50 font-extrabold absolute bottom-2 left-3 z-10">
                    Pizza Hut
                </div>
                <div className="bg-custom-gradient w-full h-full rounded-2xl absolute bottom-0 z-0"></div>
            </div>

            <div className="w-full mt-2 px-2 sm:px-4">
                <p className="text-[1rem] sm:text-[1.25rem] font-bold">Pizza Hut</p>
                <div className="flex items-center gap-1 mt-1">
                    <div className="bg-green-700 w-[22px] h-[22px] flex items-center justify-center rounded-full">
                        <FaStar color="white" />
                    </div>
                    <p className="text-sm sm:text-base font-semibold">4</p>
                    <div className="font-semibold">•</div>
                    <p className="text-sm sm:text-base font-semibold">55 Mins</p>
                </div>
                <div className="text-zinc-500 text-[0.875rem] sm:text-[1rem] mt-1 text-wrap break-words">
                    Pizzas
                </div>
            </div>
        </div>
    );
};

// Restaurant Slider Component
const RestaurantList = () => {
    const restaurants = Array.from({ length: 10 });

    return (
        <Swiper
            slidesPerView={1.2}
            spaceBetween={15}
            modules={[Pagination]}
            pagination={{ clickable: true }} // Add pagination functionality
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
            {restaurants.map((_, index) => (
                <SwiperSlide key={index}>
                    <RestaurantListData />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default RestaurantList;
