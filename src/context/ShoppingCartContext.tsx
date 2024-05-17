import { createContext, useContext, ReactNode, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import CartSlideOver from "@/scenes/shared/CartSlideOver";
import { CartItem } from "@/scenes/shared/types";

type ShoppingCartProviderProps = {
    children: ReactNode,
}

type ShoppingCartContext = {
    openCart: () => void,
    closeCart: () => void,
    getItemQuantity: (id: string) => number,
    increaseCartQuantity: (name: string, id: string, size: string, quantity: number, image: string, price: number, parentID: string) => void,
    decreaseCartQuantity: (id: string) => void,
    removeFromCart: (id: string) => void,
    isOpen: boolean
    cartQuantity: number,
    cartItems: CartItem[],
    cartSubtotal: number,
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {

    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", [])
    const [isOpen, setIsOpen] = useState(false)


    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )

    const intitialValue = 0;
    const cartSubtotal = cartItems.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity),
        intitialValue,
    );

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id: string) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(name: string, id: string, size: string, quantity: number, image: string, price: number, parentID: string) {
        setCartItems(currItems => {
            console.log(cartItems);
            if (currItems.find(item => item.id === id) === undefined) {
                return [...currItems, { name, id, size, quantity, image, price, parentID }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + quantity }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: string) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: string) {
        return setCartItems(cartItems.filter(item => item.id !== id))
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                openCart,
                closeCart,
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                isOpen,
                cartItems,
                cartQuantity,
                cartSubtotal,

            }}>
            {children}
            <CartSlideOver />
        </ShoppingCartContext.Provider>
    )

}