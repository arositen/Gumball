
import { useShoppingCart } from '@/context/ShoppingCartContext';
import { Link } from 'react-router-dom';
import { formatCurrency } from '@/utils/formatCurrency';

type Props = {}

function Checkout({ }: Props) {


    const { cartItems, removeFromCart, closeCart, cartQuantity, cartSubtotal } = useShoppingCart();
    const imageBase = import.meta.env.BASE_URL;

    return (
        <section className='pt-28 min-h-screen w-full'>
            <div className='flex justify-center'>
                <div className='grid grid-cols-3 gap-4 sm:w-5/6 max-w-[1400px] items-start'>
                    <div className='my-2 py-4 p-2 col-span-3 md:col-span-2'>
                        <span className='text-2xl ml-2 md:ml-4'>My Bag</span>
                        <span className='mx-4 text-gray-500'>(x{cartQuantity}) Items</span>
                        {cartItems.map((item, index) => (

                            <div key={`${item.id} - ${index}`} className="mt-8">
                                <div className="flow-root">
                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                        <li className="flex p-6 mx-2 md:mx-4 my-4 border-2 border-gray-100">
                                            <div className="h-36 w-36 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img src={`${imageBase}${item.image}`} className="h-full w-full object-cover object-center" />
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>
                                                            <Link to={`details/${item.parentID}`} state={{ from: item, id: item.parentID }} onClick={closeCart}>{item.name}</Link>
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
                    <div className='flex flex-col items-center justify-center max-w-xl mt-2 md:mt-16 col-span-3 md:col-span-1'>
                        <div className='w-5/6 bg-gray-200 p-5 my-5'>
                            <div className='text-xl mb-6'>Order Summary</div>
                            <div className='flex justify-between my-1'>
                                <div>Subtotal</div>
                                <div>{formatCurrency(cartSubtotal)}</div>
                            </div>
                            <div className='flex justify-between my-1'>
                                <div>Shipping</div>
                                <div>FREE</div>
                            </div>
                            <div className='flex justify-between mt-1 pb-6 border-b-gray-300 border-2'>
                                <div>Est. Tax</div>
                                <div>TBD</div>
                            </div>
                            <div className='flex justify-between mt-4 text-xl font-bold'>
                                <div>Est. Total</div>
                                <div>{formatCurrency(cartSubtotal)}</div>
                            </div>
                            <div className='flex justify-between mt-4 text-xl font-bold'>
                                <button className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 hover:bg-indigo-700 py-2 text-base font-medium text-white shadow-sm'>
                                    Checkout
                                </button>
                            </div>
                        </div>
                        <div className='w-5/6 bg-gray-200 p-5 my-5'>
                            <div className='text-xl mb-6'>Promos</div>
                            <div className='flex justify-around my-1'>
                                <input type="text" className='w-4/6 border-2 border-b-gray-500 bg-transparent' placeholder='Enter Promo Code' />
                                <button className='items-center justify-center rounded-md border border-transparent bg-gbOrange-300 hover:bg-gbOrange-500 p-2 text-base font-medium text-white shadow-sm'>Apply</button>

                            </div>
                        </div>
                        <div className='w-5/6 bg-gray-200 p-5 my-5'>
                            <div className='text-xl mb-6'>My Points and Rewards</div>
                            <div className='flex my-1'>
                                <div>Rewards Members earn points on each purchase, plus other exclusive benefits.</div>
                            </div>
                            <div className='flex my-1 text-sm text-blue-500'>
                                <div className="hover:underline hover:cursor-pointer ">Join now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout