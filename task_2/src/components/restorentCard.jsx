import React from "react";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Restaurant = () => {
    return (
        <div className="hover:scale-95 transition-all duration-200 cursor-pointer mt-5">
            <div className="relative">
                <img
                    src={`https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=`}
                    alt="Pizza Hut"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover rounded-2xl"
                />
                <div className="text-lg sm:text-xl text-zinc-50 font-extrabold absolute bottom-2 left-3 z-10">
                    Pizza Hut
                </div>
                <div className="bg-custom-gradient w-full h-full rounded-2xl absolute bottom-0 z-0"></div>
            </div>

            <div className="w-full mt-2 px-2 sm:px-4">
                <p className="text-sm sm:text-[1.20rem] font-bold">Pizza Hut</p>
                <div className="flex items-center gap-1 mt-1">
                    <div className="bg-green-700 w-5 h-5 flex items-center justify-center rounded-full">
                        <FaStar color="white" />
                    </div>
                    <p className="text-xs sm:text-sm font-semibold">4</p>
                    <div className="font-semibold">•</div>
                    <p className="text-xs sm:text-sm font-semibold">55 Mins</p>
                </div>
                <div className="text-zinc-500 text-xs sm:text-sm mt-1">
                    Pizzas
                </div>
            </div>
        </div>
    );
};

const RestaurantSlider = () => {
    const restaurants = Array.from({ length: 10 });

    return (
        <Swiper
            slidesPerView={1.1}
            spaceBetween={15}
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
            modules={[Pagination]}
            className="mySwiper"
        >
            {restaurants.map((_, index) => (
                <SwiperSlide key={index}>
                    <Restaurant />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default RestaurantSlider;
