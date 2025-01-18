import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const DishCato = () => {
    const dishImages = [
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Desserts.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Desserts.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Desserts.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Desserts.png",
    ];

    return (
        <div className="mt-10 mb-7">
            <h1 className="uppercase text-xl font-semibold mb-4">What’s on your mind</h1>
            <Swiper
                slidesPerView={2.5}
                spaceBetween={15}
                breakpoints={{
                    640: {
                        slidesPerView: 3.5,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4.5,
                        spaceBetween: 25,
                    },
                }}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {dishImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center">
                            <img
                                src={image}
                                alt={`Dish ${index + 1}`}
                                className="w-32 h-32 md:w-44 md:h-44 object-cover rounded-full"
                            />
                        </div>
                        <div className="flex flex-col items-center mt-5">
                            <img
                                src={image}
                                alt={`Dish ${index + 1}`}
                                className="w-32 h-32 md:w-44 md:h-44 object-cover rounded-full"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DishCato;
