import React, { useState } from 'react'
import { BuyableItem } from '../../types/BuyableItem'
import './ShoppingItem.scss'
import moment from 'moment-jalaali';
import { BiCalendarPlus } from 'react-icons/bi';
import { BiTimeFive } from 'react-icons/bi';

interface inputProps {
    item:BuyableItem,
    onChange: any
}

const ShoppingItem = ({item, onChange}: inputProps) => {
    const {id, title, isBought, description, createDate} = item;
    const [isOpen, setIsOpen] = useState(false);

    moment.loadPersian({dialect: 'persian-modern', usePersianDigits: true});

    return (
        <li className='shopping-item'>
            <div className='main-info' onClick={e => setIsOpen(!isOpen)}>
                <input type='checkbox' onChange={e => onChange(id)} checked={isBought} />
                <span className='title'>
                    {title.length > 30 && !isOpen
                        ? title.substring(0,30) + '...'
                        : title
                    }
                </span>
            </div>
            <div className={'extra-info' + (isOpen ? '' : ' is-collapse')}>
                <div className='description'>
                    {description}
                </div>
                <div className='date-and-time'>
                    <div>
                        <BiCalendarPlus className="abc" />
                        {moment(createDate).format('dddd، jD jMMMM jYYYY')}
                    </div>
                    <div>
                        <BiTimeFive />
                        {moment(createDate).format('HH:mm:ss')}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ShoppingItem
