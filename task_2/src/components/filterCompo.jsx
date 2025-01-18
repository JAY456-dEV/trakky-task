import React from 'react';
import { FiFilter, FiChevronDown } from 'react-icons/fi';

const FilterBar = () => {
    return (
        <div className="w-full bg-white sticky top-0 z-50 border-b border-gray-100">
            <div className="relative w-full">
                <div className="flex items-center gap-3 p-4 overflow-x-auto scrollbar-hide">

                    <div className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-300 text-sm">
                        <FiFilter className="w-4 h-4" />
                        <span>Filter</span>
                    </div>

                    <div className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-300 text-sm">
                        <span>Sort by</span>
                        <FiChevronDown className="w-4 h-4" />
                    </div>


                    <div className="flex-shrink-0 px-3 py-1.5 rounded-full border border-gray-300 text-sm">
                        10 Mins
                    </div>

                    <div className="flex-shrink-0 px-3 py-1.5 rounded-full border border-gray-300 text-sm">
                        20 Mins
                    </div>

                    <div className="flex-shrink-0 px-3 py-1.5 rounded-full border border-gray-300 text-sm">
                        Pizza
                    </div>

                    <div className="flex-shrink-0 px-3 py-1.5 rounded-full border border-gray-300 text-sm">
                        Burgers
                    </div>

                    <div className="flex-shrink-0 px-3 py-1.5 rounded-full border border-gray-300 text-sm">
                        Chinese
                    </div>

                    <div className="flex-shrink-0 px-3 py-1.5 rounded-full border border-gray-300 text-sm">
                        Italian
                    </div>

                    <div className="flex-shrink-0 px-3 py-1.5 rounded-full border border-gray-300 text-sm">
                        Japanese
                    </div>

                    <div className="flex-shrink-0 px-3 py-1.5 rounded-full border border-gray-300 text-sm">
                        Indian
                    </div>

                    <div className="flex-shrink-0 px-3 py-1.5 rounded-full border border-gray-300 text-sm">
                        Thai
                    </div>

                    <div className="flex-shrink-0 px-3 py-1.5 rounded-full border border-gray-300 text-sm">
                        Mexican
                    </div>

                    <div className="flex-shrink-0 px-3 py-1.5 rounded-full border border-gray-300 text-sm">
                        Desserts
                    </div>

                    <div className="flex-shrink-0 px-3 py-1.5 rounded-full border border-gray-300 text-sm">
                        Beverages
                    </div>
                </div>

                <style jsx global>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
            </div>
        </div>
    );
};

export default FilterBar;