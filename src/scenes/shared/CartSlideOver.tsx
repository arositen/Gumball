import { useShoppingCart } from "@/context/ShoppingCartContext";
import { formatCurrency } from "@/utils/formatCurrency";
import { Link } from "react-router-dom";

function CartSlideOver() {

    const { cartItems, isOpen, removeFromCart, closeCart, cartSubtotal } = useShoppingCart();
    let isEmpty = cartItems.length === 0

    return (
        <>
            {isOpen && (
                <div className="relative z-20" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">

                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <div className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">

                                            {/* Cart Heading */}
                                            <div className="flex items-start justify-between">
                                                <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping Bag</h2>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button type="button" onClick={closeCart} className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                                                        <span className="absolute -inset-0.5"></span>
                                                        <span className="sr-only">Close panel</span>
                                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>

                                            {isEmpty && (
                                                <div className="flex justify-center mx-auto mt-20 text-2xl text-gray-500">
                                                    No Items in Bag
                                                </div>
                                            )}

                                            {/* Products */}
                                            {cartItems.map((item, index) => (

                                                <div key={`${item.id} - ${index}`} className="mt-8">
                                                    <div className="flow-root">
                                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                            <li className="flex py-6">
                                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                    <img src={item.image} className="h-full w-full object-cover object-center" />
                                                                </div>

                                                                <div className="ml-4 flex flex-1 flex-col">
                                                                    <div>
                                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                                            <h3>
                                                                                <Link to={`/details/${item.parentID}`} state={{ from: item, id: item.parentID }} onClick={closeCart}>{item.name}</Link>
                                                                            </h3>
                                                                            <p className="ml-4">{formatCurrency(item.price * item.quantity)}</p>
                                                                        </div>
                                                                        <p className="mt-1 text-sm text-gray-500">{`Size: ${item.size}`}</p>
                                                                        <p className="mt-1 text-sm text-gray-500">{`Price: ${item.price}`}</p>
                                                                    </div>
                                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                                        <p className="text-gray-500">{`Qty ${item.quantity}`}</p>
                                                                        <div className="flex">
                                                                            <button type="button" onClick={() => removeFromCart(item.id)} className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <p>Subtotal</p>
                                                <p>{formatCurrency(cartSubtotal)}</p>
                                            </div>
                                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                            <div className="mt-6">
                                                <Link to={'/checkout/'}>
                                                    <button className={`flex ${isEmpty ? 'opacity-50' : 'opacity-100 hover:bg-indigo-700'} w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm`}
                                                        disabled={isEmpty}
                                                        onClick={closeCart}>
                                                        Checkout
                                                    </button>
                                                </Link>
                                            </div>
                                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                <p>
                                                    <span className="mx-1">or</span>
                                                    <button type="button" onClick={closeCart} className="font-medium text-indigo-600 hover:text-indigo-500">
                                                        Continue Shopping
                                                        <span aria-hidden="true"> &rarr;</span>
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CartSlideOver