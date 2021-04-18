import React, {useState, useEffect} from 'react';

const BuyList = (props: any) => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        setItems([
            { id: 1, title: "سیب" },
            { id: 2, title: "دفتر یادداشت" },
        ]);

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
                { items.map( (item:any, index: number) => {
                    return (
                        <li key={item.id}>{item.title}</li>
                    );
                })}
            </div>
            {/* <NavBar /> */}
        </div>
    )
}

export default BuyList;
