import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaMicrophone } from 'react-icons/fa';

function SearchBar() {
    return (
        <div className="border border-slate-300 flex justify-between px-2 py-2 items-center rounded-md mb-5">
            <input
                type="text"
                placeholder="Search For Anything"
                className="outline-none border-none flex-grow px-2"
            />
            <div className="flex items-center">
                <CiSearch size={23} />
                <div className="border-l border-slate-300 h-6 mx-2"></div>
                <FaMicrophone size={23} color="orange" />
            </div>
        </div>
    );
}

export default SearchBar;
