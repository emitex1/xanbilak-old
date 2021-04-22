import React, {useState, useEffect} from 'react';
import { BuyableItem } from '../../types/BuyableItem';
import { BuyableItemsData } from './BuyableItemsData';

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
            <div className='buy-list'>
                <ul>
                { items.map( (item:any, index: number) => {
                    return (
                        <li key={item.id}>
                            <input type='checkbox' onClick={e => buyClickHandle(item.id)} />
                            {item.title}
                        </li>
                    );
                })}
                </ul>
            </div>
            {/* <NavBar /> */}
        </div>
    )
}

export default ShoppingList;
