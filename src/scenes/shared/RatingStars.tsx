import { StarIcon } from '@heroicons/react/20/solid'

type Props = {
    numOfStars: number,
}

function RatingStars({ numOfStars }: Props) {
    return (
        <div className='flex justify-center items-center text-lg'>
            {numOfStars} <StarIcon className="h-4 w-4" />
        </div>
    )
}

export default RatingStars