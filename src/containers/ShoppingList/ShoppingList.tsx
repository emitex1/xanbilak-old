import React, {useState, useEffect} from 'react';
import MainHeader from '../../components/MainHeader/MainHeader';
import NavBar from '../../components/NavBar/NavBar';
import { BuyableItem } from '../../types/BuyableItem';
import { getData } from '../../util/ApiTools';
import { BuyableItemsData } from './BuyableItemsData';
import ShoppingItem from './ShoppingItem';
import './ShoppingList.scss'

const ShoppingList = (props: any) => {
    // Shopping Items
    const [items, setItems] = useState<BuyableItem[]>([]);
    // add-box input reference
    let titleInputRef: any;
    
    const readShoppingItemsData = async () => {
        const data = await getData("sic")
        console.log(data && data.shopping_items_count);

        setItems(BuyableItemsData);
    }

    const addClickHandle = (e:any) => {
        if(e.charCode === 13) {
            setItems([...items, {
                id: 0,
                title: e.target.value,
                isBought: false,
                description: "",
                createDate: new Date(),
                buyDate: undefined,
            }]);

            // Clear the add-box input
            titleInputRef.value = "";
        }
    }

    const shoppingItemCheckHandle = (itemId: number) => {
        //alert(itemId);
    }

    useEffect(() => {
        readShoppingItemsData();

        return () => {
            //cleanup
        }
    }, [])

    return (
        <div className='page-wrapper'>
            <MainHeader />
            <div className='add-box'>
                <input type='text'
                    onKeyPress={addClickHandle}
                    ref={el => titleInputRef = el}
                />
            </div>
            <div className='shopping-list'>
                <ul>
                { items.map( (item:any, index: number) => 
                    <ShoppingItem
                        item={item}
                        onChange={shoppingItemCheckHandle}
                        key={item.id}
                    />
                )}
                </ul>
            </div>
            <NavBar />
        </div>
    )
}

export default ShoppingList;
