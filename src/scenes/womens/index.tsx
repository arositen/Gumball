import { useState } from 'react';
import WomensPageTitle from '@/assets/WomensPageTitle.png';
import ProductGrid from '../shared/ProductGrid';
import SortAndFilterMenu from '../shared/SortAndFilterMenu';
import { Product, Sort, Filter } from '../shared/types';
import { sortAscendingPrice, sortDescendingPrice, isChecked } from '@/utils/SortAndFilterFunctions';
import shirtData from '@/data/shirtDatabase.json';
import useMediaQuery from '@/hooks/useMediaQuery';
import { XMarkIcon } from "@heroicons/react/24/solid";

type Props = {}

const womensShirts: Product[] = shirtData.filter((e) => e.gender === "womens");

const allPriceSorts: Sort[] = [
    { name: "Low to High", selected: false, sortMethod: sortAscendingPrice },
    { name: "High to Low", selected: false, sortMethod: sortDescendingPrice },
]

const allShirtTypes: Filter[] = [
    { name: "T-Shirt", checked: false },
    { name: "Cardigan", checked: false },
    { name: "Button Up", checked: false },
];

function Womens({ }: Props) {

    const isAboveSmallScreens = useMediaQuery("(min-width:800px)");
    const [searchArray, setSearchArray] = useState(womensShirts);
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

    const handleSortAndFilters = (priceSorts: Sort[], categoryFilters: Filter[]) => {

        //Find out which Sort is selected so we can use priceSort.sortMethod
        let selectedSort: Sort = { name: 'no sort', selected: true, sortMethod: (someArray: Product[]) => { return someArray } };
        let checkedCategories: string[] = []

        priceSorts.map((sorter) => {
            sorter.selected === true ? selectedSort = sorter : ''
        })
        console.log(selectedSort);

        categoryFilters.map((category) => {
            category.checked === true ? checkedCategories = [...checkedCategories, category.name] : [...checkedCategories]
        })
        console.log(checkedCategories);

        setSearchArray(selectedSort.sortMethod(womensShirts.filter((e) => isChecked(e.category, checkedCategories))))
    }

    return (
        <section className=''>
            <div className='pt-10 flex justify-center content-center w-full h-3/4 bg-black'>
                <img className='object-center object-contain' src={WomensPageTitle} alt="" />
                {/* <div className="before:content-wPageTitle h-[200px] my-auto mx-auto"></div> */}
            </div>
            <div className='flex flex-col sm:flex-row justify-center sm:justify-end m-3'>

                {!isAboveSmallScreens && !isMenuToggled && (
                    <div className=' px-1 xs:px-5 sticky top-48' >
                        <button className='text-lg font-bold text-center m-2 ml-0 p-2 border-2 border-gbGray-300 bg-white opacity-80'
                            onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            Filter and Sort
                        </button>
                    </div>
                )}

                {isAboveSmallScreens && (
                    <div className='mx-2 my-5 basis-1/5'>
                        <SortAndFilterMenu allSorts={allPriceSorts} allFilters={allShirtTypes} updateSortsAndFilters={handleSortAndFilters} />
                    </div>
                )}
                <div className=' px-1 xs:px-5 sm:basis-4/5'>
                    <ProductGrid products={searchArray} page='mens' />
                </div>
            </div>

            {/* MOBILE filter MENU MODAL  */}
            {!isAboveSmallScreens && isMenuToggled && (
                <div className="fixed left-0 top-0 z-40 h-full w-2/3 rounded-br-2xl bg-white drop-shadow-xl">
                    {/* CLOSE ICON */}
                    <div className="flex justify-start px-10 py-4">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-8 w-8" />
                        </button>
                    </div>
                    {/* MENU ITEMS  */}
                    <div className='mx-2 my-5 basis-1/5'>
                        <SortAndFilterMenu allSorts={allPriceSorts} allFilters={allShirtTypes} updateSortsAndFilters={handleSortAndFilters} />
                    </div>
                </div>
            )}

        </section >
    )
}

export default Womens