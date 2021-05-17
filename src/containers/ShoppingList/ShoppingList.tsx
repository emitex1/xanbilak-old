import React, {useState, useEffect} from 'react';
import MainHeader from '../../components/MainHeader/MainHeader';
import NavBar from '../../components/NavBar/NavBar';
import { BuyableItem } from '../../types/BuyableItem';
import { getData, sendData } from '../../util/ApiTools';
import ShoppingItem from './ShoppingItem';
import './ShoppingList.scss'

const ShoppingList = (props: any) => {
    // Shopping Items
    const [items, setItems] = useState<BuyableItem[]>([]);
    // add-box input reference
    let titleInputRef: any;
    
    const readShoppingItemsData = async () => {
        try {
            const data = await getData("shoppingList")
            setItems(data);
        }
        catch (err) {
            console.log("Error in reading shopping list :", err);
        }
    }

    const createShoppingItem = async (title: string) => {
        try {
            const result = await sendData("shoppingItem/create", {
                "title": title || "<No Title>"
            });
            //console.log(result);
        }
        catch (err) {
            console.log("Error in creating shopping item :", err);
        }
    }

    const addClickHandle = async (e:any) => {
        if(e.charCode === 13) {
            await createShoppingItem(e.target.value);

            // Clear the add-box input
            titleInputRef.value = "";

            // Read the new added item
            readShoppingItemsData();
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
