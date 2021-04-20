import { BuyableItem } from '../../types/BuyableItem';

export const BuyableItemsData: BuyableItem[] = [
    {
        id: 1,
        title: "سیب",
        isBought: false,
        createDate: new Date(2021,1,1),
        updateDate: new Date('2021-01-01'),
    },
    {
        id: 2,
        title: "دفتر یادداشت",
        isBought: false,
        createDate: new Date(2021,1,1),
    },
    {
        id: 3,
        title: "هویج",
        isBought: true,
        createDate: new Date(2021,1,1),
        buyDate: new Date('2021-01-02'),
    },
    {
        id: 4,
        title: "باطری قلمی",
        isBought: false,
        createDate: new Date(2021,1,1),
    },
]