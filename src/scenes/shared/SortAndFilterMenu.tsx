import { useState } from "react";
import InputAccordion from "@/scenes/shared/InputAccordion";
import Radio from "@/scenes/shared/RadioList";
import Checkbox from "@/scenes/shared/Checkbox";
import { Sort, Filter } from "./types";

type Props = {
    allSorts: Sort[],
    allFilters: Filter[],
    updateSortsAndFilters: (priceSorts: Sort[], categoryFilters: Filter[]) => void,
}

function SortAndFilterMenu({ allSorts, allFilters, updateSortsAndFilters }: Props) {


    const [selectedPriceSort, setSelectedPriceSort] = useState(allSorts);
    const [shirtTypesChecked, setShirtTypesChecked] = useState(allFilters);

    const updatePriceSortSelected = (index: number) => {

        const currentVal = selectedPriceSort[index].selected;

        const newPriceSort = selectedPriceSort.map((sort, currentIndex) => (
            currentIndex === index || sort.selected !== currentVal ? { ...sort, selected: !sort.selected } : sort
        ))
        updateSortsAndFilters(newPriceSort, shirtTypesChecked)
        setSelectedPriceSort(newPriceSort)
    }

    const updateShirtsChecked = (index: number) => {

        const newShirtsChecked = shirtTypesChecked.map((shirtType, currentIndex) => (
            currentIndex === index ? { ...shirtType, checked: !shirtType.checked } : shirtType
        ))

        updateSortsAndFilters(selectedPriceSort, newShirtsChecked)
        setShirtTypesChecked(newShirtsChecked)
    }

    const clearFilters = () => {
        updateSortsAndFilters(allSorts, allFilters);
        setSelectedPriceSort(allSorts);
        setShirtTypesChecked(allFilters);
    }

    return (
        <div className='flex flex-col mx-2 py-2 border-[1px] border-solid border-black rounded-lg'>
            <div className='text-xl font-bold text-center my-3 px-2'>Filter and Sort</div>
            <div className="flex flex-col justify-center">
                {/* Price Sort */}
                <div className="p-2 bg-gray-100">
                    <InputAccordion title='Price'>
                        {selectedPriceSort.map((sort, index) => (
                            <Radio
                                key={`${sort.name}-${index}`}
                                label={sort.name}
                                group="PriceSort"
                                isSelected={sort.selected}
                                handleClick={() => updatePriceSortSelected(index)}
                                index={index} />
                        ))}
                    </InputAccordion>
                </div>

                {/* Category Sort */}
                <div className="p-2">
                    <InputAccordion title='Category'>
                        <div className="overflow-hidden">
                            {shirtTypesChecked.map((shirt, index) => (
                                <Checkbox
                                    key={`${shirt.name}-${index}`}
                                    label={shirt.name}
                                    isChecked={shirt.checked}
                                    handleCheck={() => updateShirtsChecked(index)}
                                    index={index} />
                            ))}
                        </div>
                    </InputAccordion>
                </div>

            </div>
            <div className="flex w-full justify-center my-2">
                <button onClick={clearFilters} className="py-1 px-3 mx-3 text-sm rounded-md hover:underline">Clear Filters</button>
                {/* <button className="py-1 px-3 mx-3 text-sm rounded-md hover:underline">Clear All</button> */}
            </div>
        </div>
    )
}

export default SortAndFilterMenu