import { Product } from "@/scenes/shared/types";

export const sortAscendingPrice = (inputArray: Product[]) => {
    return [...inputArray].sort((a, b) => {
        return a.price - b.price;
    })
}

export const sortDescendingPrice = (inputArray: Product[]) => {
    return [...inputArray].sort((a, b) => {
        return b.price - a.price
    })
}

export const isChecked = (val: string, comparison: string[]) => {
    if (comparison.length === 0) {
        return true;
    }
    for (let i = 0; i < comparison.length; i++) {
        if (val === comparison[i]) {
            return true;
        }
    }
    return false;
}