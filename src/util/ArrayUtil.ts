export const decreaseArraySize = (arr: any, amount: number = 1) => {
    const arr2: any = [];
    for (let i: number = 0; i < arr.length - amount; i++) {
        arr2.push(arr[i]);
    }
    return arr2;
};

export const convertToKeyValue = (arr: any) => {
    return arr.map( (item: any, index: number) => {
        return {
            key: index,
            value: item
        };
    });
};
