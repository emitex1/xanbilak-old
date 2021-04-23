import { BuyableItem } from '../../types/BuyableItem';

export const BuyableItemsData: BuyableItem[] = [
    {
        id: 1,
        title: "سیب",
        count: 2,
        isBought: false,
        description: "ترجیحاً سیب زرد، اگر نداشت سرخ",
        createDate: new Date(2021,1,1),
        updateDate: new Date('2021-01-01'),
    },
    {
        id: 2,
        title: "دفتر یادداشت",
        count: 4,
        isBought: false,
        description: "40 برگ داریم، بیشتر از این باشه",
        createDate: new Date(2021,1,1),
    },
    {
        id: 3,
        title: "هویج",
        isBought: true,
        description: "تمیز باشن",
        createDate: new Date(2021,1,1),
        buyDate: new Date('2021-01-02'),
    },
    {
        id: 4,
        title: "باطری قلمی",
        count: 2,
        isBought: false,
        description: "A++",
        createDate: new Date(2021,1,1),
    },
]