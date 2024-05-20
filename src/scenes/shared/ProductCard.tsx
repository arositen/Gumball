import { Product } from "./types"
import { Link } from "react-router-dom"
import { formatCurrency } from "@/utils/formatCurrency";
import RatingStars from "./RatingStars";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    product: Product
}

function ProductCard({ product }: Props) {

    const isAboveSmallScreens = useMediaQuery("(min-width:800px)");
    const basePath = 'Gumball/';

    return (
        <Link to={`${basePath}/details/${product.productID}`} state={{ from: product, id: product.productID }} className="flex flex-col justify-center max-w-96 mt-5 mx-auto border-solid border-2 border-black rounded-xl shadow-lg hover:scale-105 transition-all ease-in-out duration-300">
            <img src={product.image} className="w-full object-contain rounded-lg" alt="" />
            <div className='p-2'>
                <div className='text-lg sm:text-xl font-bold my-1 mx-3'>{product.name}</div>
                {isAboveSmallScreens && <div className="my-1 mx-3 text-md text-gray-500">{product.description}</div>}
                <div className="flex justify-between text-sm sm:text-md text-right mt-2 mx-3"><span><RatingStars numOfStars={product.rating} /></span><span className="flex justify-center items-center">{formatCurrency(product.price)}</span></div>
            </div>
        </Link>
    )
}

export default ProductCard