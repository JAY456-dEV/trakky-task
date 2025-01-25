import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const PromoCard = () => {
    return (
        <div className="bg-red-500 rounded-xl text-white flex flex-col sm:flex-row p-4 items-center shadow-lg">
            <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-bold">Flat 50% OFF</h2>
                <p className="text-sm sm:text-base mt-2">
                    The unbeatable deal of the season is up for grabs!
                </p>
                <button className="bg-white text-red-500 font-bold mt-4 py-2 px-4 rounded-full hover:bg-red-100">
                    ORDER NOW
                </button>
            </div>

            <div className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-4 w-full sm:w-32 lg:w-40 md:block hidden">
                <img
                    src="./public/pizza.png"
                    alt="Food Promo"
                    className="w-full h-auto rounded-lg"
                />
            </div>
        </div>
    );
};

export default function App() {
    const restaurants = Array.from({ length: 10 });

    return (
        <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                480: {
                    slidesPerView: 1.5,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }}
        >
            {restaurants.map((_, index) => (
                <SwiperSlide key={index}>
                    <PromoCard />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
