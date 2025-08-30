import Image from "next/image";

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    {/* <div className='py-3 text-center lg:text-start'>
                        <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>DESIGN AGENCY</button>
                    </div> */}
                    <div className="py-3 text-center lg:text-start">
                        <h3 className="text-2xl lg:text-6xl font-bold text-white text-opacity-75">
                            Get stunning visuals <br /> that make your
                        </h3>
                        <h3 className="text-2xl lg:text-6xl font-bold text-neon">brand shine.</h3>   <br />
                        <span className="text-xl lg:text-2xl font-boldtext text-white text-opacity-75">Skip the stress and save hours</span>

                    </div>
                    <div className='my-7 text-center lg:text-start'>
                        <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-soft text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-soft'>
                            Get Started
                        </button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className='lg:-m-24 lg:pt-20 hidden lg:block'>
                    <Image src="/images/banner/banner.png" alt="hero-image" width={800} height={642} />
                </div>

            </div>
        </div>
    )
}

export default Banner;
