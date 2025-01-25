import React, { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { restaurants } from "../data";

function ExploreRestaurant() {
    const [likedCards, setLikedCards] = useState({});
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const toggleLike = (id) => {
        setLikedCards((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 370);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const getDescription = (description) => {
        return isSmallScreen ? `${description.substring(0, 16)}...` : description;
    };

    return (
        <div className="mt-3">
            <h1 className="text-2xl font-semibold py-2">Top 2294 Restaurants to Explore</h1>
            <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-6 gap-y-3">
                {restaurants.map((restaurant) => (
                    <div key={restaurant.id} className="flex items-start gap-3">
                        <div>
                            <div className="hover:scale-95 transition-all duration-200 cursor-pointer mt-4 mb-2">
                                <div className="relative w-[10rem] h-56">
                                    <img
                                        src={restaurant.img}
                                        alt={restaurant.name}
                                        className="w-full h-full rounded-2xl object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl z-10"></div>
                                    <div className="absolute -top-2 left-0 -right-2 z-20 flex justify-end items-center">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleLike(restaurant.id);
                                            }}
                                            className="absolute top-4 right-4 bg-white/75 p-2 rounded-full shadow-md hover:bg-red-50 transition-all duration-200"
                                        >
                                            {likedCards[restaurant.id] ? (
                                                <AiFillHeart className="w-6 h-6 text-red-500" />
                                            ) : (
                                                <AiOutlineHeart className="w-6 h-6 text-gray-500" />
                                            )}
                                        </button>
                                    </div>
                                    <div className="absolute bottom-3 left-3 z-20 font-semibold">
                                        <div className="flex justify-between text-white">
                                            <p className="text-inherit">{restaurant.name}</p>
                                        </div>
                                    </div>
                                    <p className="absolute bottom-3 right-3 z-30 text-white border py-[0px] text-sm px-2  rounded-md">AD</p>
                                </div>
                            </div>
                        </div>


                        <div className="mt-4">
                            <p className="text-slate-700 capitalize font-semibold text-base">
                                {restaurant.tagline}
                            </p>
                            <h1 className="md:text-lg text-[16px] font-bold py-1">{restaurant.name}</h1>
                            <div className="flex items-center gap-1 mt-1 text-sm md:text-base">
                                <div className="bg-green-700 w-[22.7px] h-[22px] flex items-center justify-center rounded-full">
                                    <FaStar color="white" />
                                </div>
                                <p className="font-semibold">{restaurant.rating}</p>
                                <div className="font-semibold">•</div>
                                <p className="font-semibold">{restaurant.deliveryTime}</p>
                            </div>
                            <div className="text-wrap whitespace-nowrap text-slate-600 mt-2 text-sm md:text-base">
                                {getDescription(restaurant.description)}
                            </div>
                            <div className="mt-2 text-sm font-semibold text-red flex justify-between p-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-100 font-mono w-full">
                                <p>Free Delivery</p>
                                <p className="sm:block hidden">One Lite</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExploreRestaurant;
