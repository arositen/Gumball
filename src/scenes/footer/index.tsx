type Props = {}

function index({ }: Props) {

    const linkStyle = 'text-md my-2 hover:underline hover:cursor-pointer'

    return (
        <section className="mt-10 py-10 bg-gbGray-500 text-white w-full">
            <div className="flex flex-col md:flex-row md:justify-around mx-10 md:mx-40">
                <div className='mx-10 md:basis-1/3'>
                    <div className="font-bold text-xl my-3">Customer Support</div>
                    <div className={linkStyle}>Stores</div>
                    <div className={linkStyle}>Shipping</div>
                    <div className={linkStyle}>Returns</div>
                    <div className={linkStyle}>Size Charts</div>
                </div>
                <div className='mx-10 md:basis-1/3'>
                    <div className="font-bold text-xl my-3">Gumball Rewards</div>
                    <div className={linkStyle}>My Points</div>
                    <div className={linkStyle}>Benefits</div>
                    <div className={linkStyle}>Join Gumball Rewards</div>
                </div>
                <div className='mx-10 md:basis-1/3'>
                    <div className="font-bold text-xl my-3">Contact Us</div>
                    <div className={linkStyle}>1-555-GUMBALL</div>
                    <div className={linkStyle}>Store Locator</div>
                </div>
            </div>
        </section >
    )
}

export default index