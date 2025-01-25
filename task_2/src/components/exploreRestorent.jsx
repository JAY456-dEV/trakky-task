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
            <h1>Top 2294 Restaurants to Explore</h1>
            <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-8">
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
                                    <div className="absolute top-0 left-0 right-0 z-20 flex justify-end items-center">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleLike(restaurant.id);
                                            }}
                                            className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow-md hover:bg-red-50 transition-all duration-200"
                                        >
                                            {likedCards[restaurant.id] ? (
                                                <AiFillHeart className="w-6 h-6 text-red-500" />
                                            ) : (
                                                <AiOutlineHeart className="w-6 h-6 text-gray-500" />
                                            )}
                                        </button>
                                    </div>
                                    <div className="text-md text-zinc-50 font-semibold absolute bottom-2 left-3 z-10 flex justify-between">
                                        <p className="text-inherit">{restaurant.name}</p>
                                        <p>AD</p>
                                    </div>
                                    <div className="bg-custom-gradient w-full h-full rounded-2xl absolute bottom-0 z-0"></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-gray-400 capitalize font-semibold">
                                {restaurant.tagline}
                            </p>
                            <h1 className="text-lg font-bold py-1">{restaurant.name}</h1>
                            <div className="flex items-center gap-1 mt-1">
                                <div className="bg-green-700 w-[22.7px] h-[22px] flex items-center justify-center rounded-full">
                                    <FaStar color="white" />
                                </div>
                                <p className="font-semibold">{restaurant.rating}</p>
                                <div className="font-semibold">•</div>
                                <p className="font-semibold">{restaurant.deliveryTime}</p>
                            </div>
                            <div className="text-wrap whitespace-nowrap text-slate-400 mt-2">
                                {getDescription(restaurant.description)}
                            </div>
                            <div className="mt-2 text-sm font-semibold text-red flex justify-between p-4 rounded-full bg-gradient-to-r from-white to-red-100 font-mono">
                                <p>Free Delivery</p>
                                <p>One Lite</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExploreRestaurant;
