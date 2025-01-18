import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { IoIosArrowDown } from 'react-icons/io'
import { MdHome } from 'react-icons/md'

function Header() {
    return (
        <div className='flex justify-between items-center gap-4 mb-3'>
            <div>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-1'>
                        <MdHome size={20} color='orange' />
                        <p className='font-bold'>Home</p>
                    </div>
                    <IoIosArrowDown color='gray' />
                </div>
                <p className='text-gray-500'>Lorem ipsum....</p>
            </div>
            <div className='flex gap-2 items-center'>
                <div className='bg-orange-500 w-20 h-9 rounded-full flex justify-center items-center'>
                    <span className='font-bold text-white text-[17px]'>ONE</span>
                </div>
                <div className='w-9 h-9 rounded-full bg-gray-300 flex justify-center items-center'>
                    <CgProfile size={28} color='black' />
                </div>
            </div>
        </div>
    )
}

export default Header