import ProductCard from '@/scenes/shared/ProductCard';
import { Product } from './types';

type Props = {
    products: Product[],
    page: string
}

function ProductGrid({ products, page }: Props) {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-x-1 xs:gap-x-4 gap-y-1'>
            {products.map((shirt, index) => (
                <ProductCard
                    key={`${page}-${index}`}
                    product={shirt} />
            ))}
        </div>
    )
}

export default ProductGrid