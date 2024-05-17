import UAsPageTitle from '@/assets/UAsPageTitle.png';
import ArtistProductCard from '../shared/ArtistProductCard';
import { Product } from "../shared/types";
import shirtData from "@/data/shirtDatabase.json"

type Props = {}

const UAshirts: Product[] = shirtData.filter((e) => e.gender === "special");


function UpcomingArtist({ }: Props) {

    return (
        <section className='flex flex-col justify-center items-center'>
            <div className='pt-10 flex justify-center content-center w-full h-3/4 bg-black'>
                <img className='object-center object-contain' src={UAsPageTitle} alt="" />
            </div>
            <div className='flex justify-center max-w-[1600px]'>
                <div className='flex flex-col justify-center m-3'>
                    {UAshirts.map((shirt, index) => (
                        <ArtistProductCard key={`artist-${index}`} product={shirt} page='UA' />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default UpcomingArtist