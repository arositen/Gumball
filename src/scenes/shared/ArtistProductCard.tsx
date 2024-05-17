import { Product } from './types'
import { Link } from 'react-router-dom'
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
    product: Product
    page: string
}

function ArtistProductCard({ product }: Props) {

    const greenButtonStyle = ' mx-5 text-sm content-center text-white hover:underline';
    const isAboveSmallScreens = useMediaQuery("(min-width:800px)");
    const isAboveXSmallScreens = useMediaQuery("(min-width:480px)");

    return (
        <div className='relative flex justify-between gap-3 xs:w-11/12 md:h-96 mt-5 mx-auto rounded-3xl shadow-xl overflow-hidden'>
            <div className='absolute top-0 flex my-0 py-0 h-full w-screen -z-10'>
                {/* <div className='-skew-x-6 bg-[#264653] h-full w-1/5 -mx-1 p-0'></div> */}
                <div className='-skew-x-6 bg-[#2a9d8f] h-full w-1/4 -mx-1 p-0'></div>
                <div className='-skew-x-6 bg-[#e76f51] h-full w-1/4 -mx-1 p-0'></div>
                <div className='-skew-x-6 bg-[#f4a261] h-full w-1/4 -mx-1 p-0'></div>
                <div className='-skew-x-6 bg-[#e9c46a] h-full w-1/4 -mx-1 p-0'></div>
            </div>

            <Link to={`/Gumball/details/${product.productID}`} state={{ from: product, id: product.productID }}>
                <div className='flex justify-center items-center h-full'>
                    <img className='h-full object-cover object-center rounded-xl' src={product.image} alt="" />
                </div>
            </Link>



            <div className='flex flex-col justify-center md:my-8 ml-0 xs:ml-6 xs:mr-0 sm:mr-2 md:mr-8 bg-[#403d39] text-white rounded-xl shadow-lg xs:basis-4/5'>
                <div className='flex flex-col sm:flex-row justify-around m-4'>
                    <div className='h-full flex flex-col justify-around items-center text-center p-2'>
                        <div className='text-3xl sm:text-3xl md:text-5xl m-1 px-5 bg-black -skew-x-12'>
                            {product.name}
                        </div>
                    </div>
                    {isAboveXSmallScreens && (
                        <div className='flex flex-col justify-center items-center sm:m-0 m-2 sm:p-0 p-2'>
                            <img src={product.artistPortrait} className='h-14 w-14 rounded-full m-3' alt="" />
                            <div className='text-sm text-center'>
                                {product.artistName}
                            </div>
                        </div>
                    )}
                </div>

                <div id='bioCard' className='flex justify-center items-center'>
                    {isAboveSmallScreens && (
                        <div className='text-sm mx-4 my-2 p-4'>
                            <span className='text-lg font-bold'>About the artist: </span>{product.artistBio}
                        </div>
                    )}
                </div>
                <div className='flex justify-end'>
                    <Link to={`/Gumball/details/${product.productID}`} state={{ from: product, id: product.productID }}
                        className={greenButtonStyle}>
                        Buy Now
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default ArtistProductCard