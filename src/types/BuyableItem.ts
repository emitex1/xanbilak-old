export interface BuyableItem {
    id: number,
    title: string,
    isBought: boolean,
    description?: string,
    createDate: Date,
    updateDate?: Date,
    buyDate?: Date
}