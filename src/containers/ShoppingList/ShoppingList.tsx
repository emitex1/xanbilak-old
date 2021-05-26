import React, {useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import MainHeader from '../../components/MainHeader/MainHeader';
import NavBar from '../../components/NavBar/NavBar';
import { BuyableItem } from '../../types/BuyableItem';
import { getData, sendData } from '../../util/ApiTools';
import ShoppingItem from './ShoppingItem';
import './ShoppingList.scss'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const ShoppingList = (props: any) => {
    // Shopping Items
    const [items, setItems] = useState<BuyableItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // add-box input reference
    let titleInputRef: any;
    
    const readShoppingItemsData = async () => {
        setIsLoading(true);
        try {
            const data = await getData("shoppingList")
            setItems(data);
        }
        catch (err) {
            console.log("Error in reading shopping list :", err);
        }
        setIsLoading(false);
    }

    const createShoppingItem = async (title: string) => {
        setIsLoading(true);
        try {
            const result = await sendData("shoppingItem/create", {
                "title": title || "<No Title>"
            });
            toast.success("«" + result.title + "» با موفقیت به لیست اضافه شد");
            //console.log(result);
        }
        catch (err) {
            console.log("Error in creating shopping item :", err);
        }
        setIsLoading(false);
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
                { isLoading ? (
                    <LoadingSpinner />
                )
                : items.length === 0 ? (
                    <span>No Items in list</span>
                )
                : items.map( (item:any, index: number) => 
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
