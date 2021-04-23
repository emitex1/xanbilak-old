import React, {useState, useEffect} from 'react';
import { BuyableItem } from '../../types/BuyableItem';
import { BuyableItemsData } from './BuyableItemsData';
import ShoppingItem from './ShoppingItem';
import './ShoppingList.scss'

const ShoppingList = (props: any) => {
    const [items, setItems] = useState<BuyableItem[]>([]);
    
    const readBuyItemsData = () => {
        setItems(BuyableItemsData);
    }

    const buyClickHandle = (itemId: number) => {
        //alert(itemId);
    }

    useEffect(() => {
        readBuyItemsData();

        return () => {
            //cleanup
        }
    }, [])

    return (
        <div className='page-wrapper'>
            <div className='add-box'>
                <input type='text' />
            </div>
            <div className='shopping-list'>
                <ul>
                { items.map( (item:any, index: number) => 
                    <ShoppingItem
                        item={item}
                        onClick={buyClickHandle}
                        key={item.id}
                    />
                )}
                </ul>
            </div>
            {/* <NavBar /> */}
        </div>
    )
}

export default ShoppingList;
