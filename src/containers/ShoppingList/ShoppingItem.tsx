import React from 'react'
import { BuyableItem } from '../../types/BuyableItem'
import './ShoppingItem.scss'

interface inputProps {
    item:BuyableItem,
    onClick: any
}

const ShoppingItem = ({item, onClick}: inputProps) => {
    const {id, title, isBought, description, createDate} = item;
    console.log(createDate);
    return (
        <li>
            <div >
                <input type='checkbox' onClick={e => onClick(id)} />
                {title}
            </div>
            <div className='extra-info'>
                <div>{createDate.toString()}</div>
                <div>{description}</div>
            </div>
        </li>
    );
}

export default ShoppingItem
