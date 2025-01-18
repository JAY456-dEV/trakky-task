import React, { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

function ExploreRestaurant() {
    const [likedCards, setLikedCards] = useState({});
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const restaurants = [
        {
            id: 1,
            name: "Wow! China",
            tagline: "Best In Veg Noodles",
            rating: 4.2,
            deliveryTime: "55 Mins",
            description:
                "Tibetan, Chinese, Asian, Snacks Lorem, ipsum dolor sit amet consectetur adipisicing .",
            img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
        },
        {
            id: 2,
            name: "Pizza Hut",
            tagline: "Best In Fast Food",
            rating: 4.5,
            deliveryTime: "30 Mins",
            description:
                "Pizza, Fast Food, Beverages Lorem, ipsum dolor sit amet consectetur adipisicing .",
            img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
        },
        {
            id: 3,
            name: "The Belgian Waffle Co.",
            tagline: "Best In Desserts",
            rating: 4.6,
            deliveryTime: "20-25 Mins",
            description:
                "Waffle, Desserts, Ice Cream Lorem, ipsum dolor sit amet consectetur adipisicing eli.",
            img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
        },
        {
            id: 3,
            name: "The Belgian Waffle Co.",
            tagline: "Best In Desserts",
            rating: 4.6,
            deliveryTime: "20-25 Mins",
            description:
                "Waffle, Desserts, Ice Cream Lorem, ipsum dolor sit amet consectetur adipisicing eli.",
            img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
        },
        {
            id: 3,
            name: "The Belgian Waffle Co.",
            tagline: "Best In Desserts",
            rating: 4.6,
            deliveryTime: "20-25 Mins",
            description:
                "Waffle, Desserts, Ice Cream Lorem, ipsum dolor sit amet consectetur adipisicing eli.",
            img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
        },
        {
            id: 3,
            name: "The Belgian Waffle Co.",
            tagline: "Best In Desserts",
            rating: 4.6,
            deliveryTime: "20-25 Mins",
            description:
                "Waffle, Desserts, Ice Cream Lorem, ipsum dolor sit amet consectetur adipisicing eli.",
            img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
        },
        {
            id: 3,
            name: "The Belgian Waffle Co.",
            tagline: "Best In Desserts",
            rating: 4.6,
            deliveryTime: "20-25 Mins",
            description:
                "Waffle, Desserts, Ice Cream Lorem, ipsum dolor sit amet consectetur adipisicing eli.",
            img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
        },
        {
            id: 3,
            name: "The Belgian Waffle Co.",
            tagline: "Best In Desserts",
            rating: 4.6,
            deliveryTime: "20-25 Mins",
            description:
                "Waffle, Desserts, Ice Cream Lorem, ipsum dolor sit amet consectetur adipisicing eli.",
            img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
        },
    ];

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
        handleResize(); // Set initial state
        window.addEventListener("resize", handleResize); // Listen to window resize
        return () => {
            window.removeEventListener("resize", handleResize); // Cleanup
        };
    }, []);

    const getDescription = (description) => {
        return isSmallScreen ? `${description.substring(0, 16)}...` : description;
    };

    return (
        <div className="mt-3">
            <h1>Top 2294 Restaurants to Explore</h1>
            <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3">
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
                                    <div className="absolute top-3 left-3 right-3 z-20 flex justify-end items-center">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleLike(restaurant.id);
                                            }}
                                            className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-200"
                                            style={{ minWidth: "2.5rem", minHeight: "2.5rem" }}
                                        >
                                            {likedCards[restaurant.id] ? (
                                                <AiFillHeart className="w-5 h-5 text-red-500" />
                                            ) : (
                                                <AiOutlineHeart className="w-5 h-5 text-white" />
                                            )}
                                        </button>
                                    </div>
                                    <div className="text-xl text-zinc-50 font-extrabold absolute bottom-2 left-3 z-10">
                                        {restaurant.name}
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExploreRestaurant;
