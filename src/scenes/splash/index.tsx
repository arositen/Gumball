import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from 'react-router-dom';
import useMediaQuery from "@/hooks/useMediaQuery";
import SplashPageGraphic from "@/assets/SplashPageShirtTransparent.png";
import MensShirt from "@/assets/ShirtDesign02.jfif";
import WomensShirt from "@/assets/WomensShirtDesign05.jfif";
import UAShirt from "@/assets/SpecialShirtDali.jfif";
import LiveLoud from "@/assets/LiveLifeLoud.png";
import CCs from "@/assets/gumballCCsWBlob.png";

type Props = {}

function Splash({ }: Props) {

    const buttonStyles = 'bg-gbPink-500 mx-auto px-6 py-2 rounded-full text-white text-md font-medium hover:bg-gbPink-300';
    const greenButtonStyle = 'bg-gbGreen-500 text-center p-3 mx-auto my-3 w-44 text-white font-medium hover:bg-gbGreen-300';
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
        <>
            {/* Hero Section */}
            <section className="h-screen w-full overflow-hidden relative">
                <div className="flex flex-col md:flex-row h-full justify-center">
                    {isAboveMediumScreens && <div className="z-10 mt-10 p-5 flex flex-col justify-center items-center basis-1/3 font-medium bg-transparent">
                        <img className="object-center" src={LiveLoud} alt="splashTshirt" />
                    </div>}
                    <div className="z-10 mt-10 h-full flex justify-center bg-transparent relative">
                        <img className="object-cover object-center overflow-visible drop-shadow-2xl" src={SplashPageGraphic} alt="splashTshirt" />
                        {!isAboveMediumScreens &&
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/3 -translate-y-1/2 z-10 flex justify-center items-center font-bold bg-transparent">
                                <AnchorLink href="#offerings" className="bg-gbGreen-500 border-[1px] border-bg-gbGreen-300 px-5 py-3 rounded-full text-white text-xs sm:text-sm font-regular sm:font-medium hover:bg-gbGreen-300" >
                                    Shop Now
                                </AnchorLink>
                            </div>}
                    </div>
                    {isAboveMediumScreens &&
                        <div className="z-10 mt-10 p-5 flex flex-col justify-center items-center font-bold bg-transparent basis-1/3">
                            <AnchorLink href="#offerings" className="bg-gbGreen-500 border-[1px] border-bg-gbGreen-300 px-5 py-3 rounded-full text-white font-medium hover:bg-gbGreen-300" >
                                Shop Now
                            </AnchorLink>
                        </div>}
                </div>
                <div className='absolute w-full h-72 bg-gbGray-500 -z-10 bottom-0 mt-0 pt-0'>
                    <div className="before:content-wave top-0 my-0 py-0"></div>
                </div>
            </section >

            {/* Shop Styles Section */}
            <section id="offerings" className="my-0 pt-5 pb-40 bg-gbGray-500 relative">

                <div className="flex flex-col">

                    <div className="relative group my-10 h-72 flex w-full bg-gbGray-500">
                        <div className='basis-2/3 group-hover:blur-sm group-hover:basis-5/6 transition-all ease-in-out duration-300'>
                            <img className="w-full h-full object-cover" src={MensShirt} alt="" />
                        </div>
                        <div className='absolute flex flex-col justify-center text-center top-0 h-full w-2/3 opacity-0 group-hover:w-5/6 group-hover:opacity-100 transition-all ease-in-out duration-300'>
                            <div className="text-white text-3xl my-8">Men's Collection</div>
                            <Link to={`mens`} className={buttonStyles}>See More</Link>
                        </div>
                    </div>

                    <div className="relative group my-10 h-72 flex w-full bg-gbGray-500">
                        <div className='basis-2/3 group-hover:blur-sm group-hover:basis-5/6 transition-all ease-in-out duration-300'>
                            <img className="w-full h-full object-cover" src={WomensShirt} alt="" />
                        </div>
                        <div className='absolute flex flex-col justify-center text-center top-0 h-full w-2/3 opacity-0 group-hover:w-5/6 group-hover:opacity-100 transition-all ease-in-out duration-300'>
                            <div className="text-white text-3xl my-8">Women's Collection</div>
                            <Link to={`womens`} className={buttonStyles}>See More</Link>
                        </div>
                    </div>

                    <div className="relative group my-10 h-72 flex w-full bg-gbGray-500">
                        <div className='basis-2/3 group-hover:blur-sm group-hover:basis-5/6 transition-all ease-in-out duration-300'>
                            <img className="w-full h-full object-cover" src={UAShirt} alt="" />
                        </div>
                        <div className='absolute flex flex-col justify-center text-center top-0 h-full w-2/3 opacity-0 group-hover:w-5/6 group-hover:opacity-100 transition-all ease-in-out duration-300'>
                            <div className="text-white text-3xl my-8">Upcoming Artist Collection</div>
                            <Link to={`upcoming-artist`} className={buttonStyles}>See More</Link>
                        </div>
                    </div>

                </div>
            </section >

            {/* Credit Card */}
            <section className="my-0 py-2 bg-white">
                <div className="flex flex-col md:flex-row justify-around">
                    <div className="flex flex-col justify-center py-5">
                        <div className='mx-5 my-3 md:text-5xl text-center text-3xl'>15% off</div>
                        <div className='mx-5 my-1 md:text-3xl text-center text-xl'>Every purchase for 12 months</div>
                        <div className='mx-5 my-1 md:text-lg text-center text-sm'>As a new member</div>
                        <div className={greenButtonStyle}>APPLY NOW</div>
                    </div>
                    <img className="object-contain h-60 md:h-96 z-10  my-5" src={CCs} alt="gumball Credit Cards" />
                </div>
            </section >
        </>

    )
}

export default Splash