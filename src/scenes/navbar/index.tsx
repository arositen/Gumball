import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import GumballLogo from '@/assets/GumballLogoDM.png';
import GBLogoSmall from '@/assets/GumballLogoSmall.png';
import { useShoppingCart } from '@/context/ShoppingCartContext';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
    isTopOfPage: boolean
}

function Navbar({ isTopOfPage }: Props) {

    const navBackground = isTopOfPage ? 'bg-white' : 'bg-gradient-to-b from-gbGray-500 from-80% drop-shadow pb-4';
    const navTextColor = isTopOfPage ? 'text-black' : 'text-white';
    const navStyles = `flex items-center mx-4 my-2 font-bold ${navTextColor} text-md`;

    const isAboveSmallScreens = useMediaQuery("(min-width:800px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

    const { openCart, cartQuantity } = useShoppingCart()

    const basePath = 'Gumball/';

    return (
        <nav className={`${navBackground} fixed flex justify-between w-full z-20 transition-all duration-200`}>
            <div className='flex'>
                {/* Logo */}
                {isAboveSmallScreens && (
                    <div className="flex justify-center mx-4">
                        <div className={navStyles}>
                            <Link to={`${basePath}/`}><img className='h-12 md:h-16' src={GumballLogo} alt="" /></Link>
                        </div>
                    </div>
                )}
                {/* Options */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-center mx-4">
                        <div className={navStyles}>
                            <Link to={`${basePath}/mens`}>Men's</Link>
                        </div>
                        <div className={navStyles}>
                            <Link to={`${basePath}/womens`}>Women's</Link>
                        </div>
                        <div className={navStyles}>
                            <Link to={`${basePath}/upcoming-artist`}>Upcoming Artist Series</Link>
                        </div>
                    </div>) : (
                    <div className="flex justify-center mx-4">
                        <div className={navStyles}>
                            <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className="h-8 w-8" />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Small Logo if small screen */}
            {!isAboveSmallScreens && (
                <div className="flex justify-center mx-4">
                    <div className={navStyles}>
                        <Link to={`${basePath}/`}><img className='h-10' src={GBLogoSmall} alt="" /></Link>
                    </div>
                </div>
            )}

            {/* cart */}
            <div className="flex justify-center mx-4">
                <div className={navStyles}>
                    <button
                        className='rounded-full h-10 w-10 relative flex justify-center items-center'
                        onClick={openCart}>
                        <ShoppingBagIcon className="h-7 w-7" />
                        <div className={(cartQuantity !== 0 ? 'absolute rounded-full bg-red-500 text-white flex justify-center items-center text-sm w-5 h-5 top-2/4 left-5 scale-100 ' : 'absolute rounded-full opacity-0 scale-0 ') + 'transition-all duration-200'}>
                            {cartQuantity}
                        </div>
                    </button>
                </div>
            </div>

            {/* MOBILE MENU MODAL  */}
            {!isAboveSmallScreens && isMenuToggled && (
                <div className="fixed left-0 top-0 z-40 w-2/3 rounded-br-2xl bg-gbGray-500 text-white drop-shadow-xl">
                    {/* CLOSE ICON */}
                    <div className="flex justify-start px-10 py-4">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-8 w-8" />
                        </button>
                    </div>
                    {/* MENU ITEMS  */}
                    <div className="mx-5 my-4 mb-10 px-5 flex flex-col gap-10 text-lg">
                        <Link to={`${basePath}/mens`} onClick={() => setIsMenuToggled(!isMenuToggled)}>Men's</Link>
                        <Link to={`${basePath}/womens`} onClick={() => setIsMenuToggled(!isMenuToggled)}>Women's</Link>
                        <Link to={`${basePath}/upcoming-artist`} onClick={() => setIsMenuToggled(!isMenuToggled)}>Upcoming Artist Series</Link>
                    </div>
                </div>
            )}

        </nav >
    )
}

export default Navbar