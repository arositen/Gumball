export interface Product {
    gender: string,
    name: string,
    image: string,
    description: string,
    price: number,
    category: string,
    rating: number,
    productID: string,
    sizeOfferings: { letterSize: string, sizeID: string }[],
    artistName?: string,
    artistPortrait?: string,
    artistBio?: string,
}

export interface Sort {
    name: string,
    selected: boolean,
    sortMethod: (inputArray: Product[]) => Product[],
}

export interface Filter {
    name: string,
    checked: boolean,
}

export type CartItem = {
    name: string,
    id: string,
    size: string,
    quantity: number,
    image: string,
    price: number,
    parentID: string,
}