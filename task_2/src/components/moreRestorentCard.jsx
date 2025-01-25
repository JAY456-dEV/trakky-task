import React from 'react';
import { AiOutlineHeart, AiFillStar, AiOutlineMore } from 'react-icons/ai';
import { BiSolidBadgeCheck } from 'react-icons/bi';

const RestaurantCard = ({
    name,
    image,
    rating,
    reviews,
    deliveryTime,
    cuisines,
    location,
    distance,
    bestIn,
    price,
    isAd = false
}) => {
    return (
        <div className="flex flex-col gap-4 p-4">
            <div className="text-lg font-semibold text-gray-700">
                Top 2294 restaurants to explore
            </div>

            <div className="relative flex gap-4">
                <div className="relative w-24 h-24 flex-shrink-0">
                    <img
                        src={image || "/api/placeholder/96/96"}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    {isAd && (
                        <div className="absolute bottom-1 right-1 bg-white/90 px-1 rounded text-[10px] font-medium">
                            AD
                        </div>
                    )}
                    {price && (
                        <div className="absolute bottom-8 left-1 text-white text-xs font-bold">
                            <div>ITEMS</div>
                            <div>AT ₹{price}</div>
                        </div>
                    )}
                    <button className="absolute top-1 right-1 bg-white/20 p-1 rounded-full">
                        <AiOutlineHeart className="w-4 h-4 text-white" />
                    </button>
                </div>
                
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <div className="flex-1">
                            {bestIn && (
                                <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                                    <BiSolidBadgeCheck className="w-4 h-4 text-green-600" />
                                    <span>Best in {bestIn}</span>
                                </div>
                            )}
                            <h3 className="font-bold text-lg">{name}</h3>

                            <div className="flex items-center gap-2 mt-1">
                                <div className="flex items-center gap-1 bg-green-700 px-1.5 py-0.5 rounded text-white text-sm">
                                    <span>{rating}</span>
                                    <AiFillStar className="w-3 h-3" />
                                </div>
                                <span className="text-gray-600">({reviews})</span>
                                <span className="text-gray-600">•</span>
                                <span className="text-gray-600">{deliveryTime}</span>
                            </div>

                            <div className="text-gray-500 text-sm mt-1 truncate">
                                {cuisines}
                            </div>

                            <div className="text-gray-500 text-sm mt-1">
                                {location} • {distance}
                            </div>
                        </div>

                        <button className="p-1">
                            <AiOutlineMore className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>

                    <div className="flex gap-2 mt-2">
                        <div className="bg-red-50 text-red-500 text-sm px-2 py-0.5 rounded-md">
                            FREE DELIVERY
                        </div>
                        <div className="bg-red-50 px-2 py-0.5 rounded-md">
                            <img
                                src="/api/placeholder/40/16"
                                alt="one"
                                className="h-4 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const RestaurantListData = () => {
    const restaurants = [
        {
            name: "Wow! China",
            rating: "4.2",
            reviews: "365",
            deliveryTime: "35-40 mins",
            cuisines: "Tibetan, Chinese, Asian, Snacks",
            location: "Alta One Mall",
            distance: "1.7 km",
            bestIn: "Veg Noodles",
            price: "129",
            isAd: true
        },
        {
            name: "The Belgian Waffle Co.",
            rating: "4.6",
            reviews: "5.6K+",
            deliveryTime: "20-25 mins",
            cuisines: "Waffle, Desserts, Ice Cream, Beverages",
            location: "Navrangpura",
            distance: "2.0 km",
            bestIn: "Desserts",
            isAd: false
        }
    ];

    return (
        <div className="bg-white">
            {restaurants.map((restaurant, index) => (
                <RestaurantCard key={index} {...restaurant} />
            ))}
        </div>
    );
};

export default RestaurantListData;