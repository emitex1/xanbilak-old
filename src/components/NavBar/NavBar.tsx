import React from 'react';
import './NavBar.scss';
import { IoMdSettings } from 'react-icons/io';
import { TiMessages } from 'react-icons/ti';
import { FaListOl } from 'react-icons/fa';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div>
                <span>لیست خرید</span>
                <FaListOl className='list-icon' />
            </div>
            <div>
                <span>پیام رسان</span>
                <TiMessages className='massenger-icon' />
            </div>
            <div>
                <span>تنظیمات</span>
                <IoMdSettings className='setting-icon' />
            </div>
        </div>
    )
}

export default NavBar
