import { useState } from "react";
import { useLocation } from "react-router-dom"
import { formatCurrency } from "@/utils/formatCurrency";
import Radio from "@/scenes/shared/RadioList";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import shirtData from '@/data/shirtDatabase.json';
import RatingStars from "../shared/RatingStars";

interface sizeButton {
    name: string,
    selected: boolean
}


function Details() {

    const location = useLocation()
    const { id } = location.state;
    const allQtys = [1, 2, 3, 4, 5];
    const thisShirt = shirtData.find(el => el.productID === id)!;
    const imageBase = import.meta.env.BASE_URL;

    let shirtSizes: sizeButton[] = [];

    for (let i = 0; i < thisShirt.sizeOfferings.length; i++) {
        shirtSizes = [...shirtSizes, { name: thisShirt.sizeOfferings[i].letterSize, selected: false }]
    }

    const { increaseCartQuantity } = useShoppingCart();

    const [selectedSize, setSelectedSize] = useState(shirtSizes);
    const [shirtSizeSelected, setShirtSizeSelected] = useState(false);
    const [selectedQty, setSelectedQty] = useState(1);

    const updateSizeSelected = (index: number) => {

        if (shirtSizeSelected === false) {
            setShirtSizeSelected(true);
        }
        const currentVal = selectedSize[index].selected;
        const newSize = selectedSize.map((size, currentIndex) => (
            currentIndex === index || size.selected !== currentVal ? { ...size, selected: !size.selected } : size
        ))
        setSelectedSize(newSize)
    }

    const updateSelectedQty = (val: number) => {
        setSelectedQty(val);
    }

    const addToBag = () => {

        selectedSize.map((shirt) => {
            if (shirt.selected === true) {
                let id = thisShirt.sizeOfferings.find((element) => element.letterSize === shirt.name)!.sizeID;
                increaseCartQuantity(thisShirt.name, id, shirt.name, selectedQty, thisShirt.image, thisShirt.price, thisShirt.productID);
                console.log(`Added ${selectedQty} x ${shirt.name}  of ${id} shirts to bag`)
            }
        })
    }

    return (
        <section className='pt-28 min-h-screen w-full flex justify-center'>
            <div className="flex flex-col md:flex-row justify-around w-full mb-10 max-w-[1600px]">
                <div className="md:basis-1/2 flex flex-col items-center justify-start my-5 mx-10">
                    <img src={`${imageBase}${thisShirt.image}`} className=" w-full sm:w-2/3 md:w-full object-contain border-2 border-black shadow-lg" alt="" />
                </div>
                <div className='m-5 px-5 md:basis-1/2 bg-white my-5'>
                    <div className='p-2 my-5'>
                        <div className='text-xl font-bold'>{thisShirt.name}</div>
                        <div className="my-1">{thisShirt.description}</div>
                        <div className="flex justify-between text-lg text-right mt-2"><span><RatingStars numOfStars={thisShirt.rating} /></span><span>{formatCurrency(thisShirt.price)}</span></div>
                    </div>
                    <div className='p-2 my-5'>
                        Select Size:
                        <div className="flex justify-between w-4/5">
                            {selectedSize.map((size, index) => (
                                <Radio
                                    key={`${size.name}-${index}`}
                                    label={size.name}
                                    group="SizeSelect"
                                    isSelected={size.selected}
                                    handleClick={() => updateSizeSelected(index)}
                                    index={index} />
                            ))}
                        </div>
                    </div>
                    <div className='p-2 my-5 flex justify-center'>
                        <span className="m-2">
                            <select
                                onChange={(e) => updateSelectedQty(Number(e.target.value))}
                                defaultValue={1}>
                                {allQtys.map((qty, idx) => (
                                    <option key={idx}>{qty}</option>
                                ))}
                            </select>
                        </span>
                        <span>
                            <button className="m-2 bg-black text-white h-8 w-full px-5 rounded-md"
                                onClick={addToBag}>
                                {shirtSizeSelected ? 'Add to Bag' : 'Select a Size'}
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details