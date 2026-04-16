import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Banner = () => {
    return (
        <div className='relative mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-neon/15 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className='grid grid-cols-1 lg:grid-cols-2 lg:my-16 gap-12 items-center'>

                {/* COLUMN-1 */}
                <div className="mx-auto sm:mx-0 flex flex-col justify-center text-center lg:text-start z-10">
                    <div className='inline-flex items-center justify-center lg:justify-start mb-6'>
                        <span className='text-neon bg-neon/10 border border-neon/20 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(255,51,51,0.2)]'>
                            Creative Design Agency
                        </span>
                    </div>

                    <div className="py-3">
                        <h1 className="text-4xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                            Get stunning visuals <br className="hidden lg:block"/> that make your{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-pink-500">
                                brand shine.
                            </span>
                        </h1>
                        <p className="mt-6 text-lg lg:text-2xl font-medium text-white/50 max-w-xl mx-auto lg:mx-0">
                            Skip the stress and save hours. We craft digital experiences that engage and convert.
                        </p>
                    </div>

                    <div className='mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4'>
                        <button className='group relative inline-flex items-center justify-center gap-2 text-lg font-semibold bg-neon text-white py-3 px-8 rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,51,51,0.4)] hover:shadow-[0_0_35px_rgba(255,51,51,0.6)] transition-all duration-300 hover:-translate-y-1'>
                            <span className="relative z-10">Get Started</span>
                            <ArrowRightIcon className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
                        </button>
                        <button className='inline-flex items-center justify-center gap-2 text-lg font-semibold text-white/80 hover:text-white py-3 px-8 rounded-full border border-white/10 hover:border-white/30 backdrop-blur-sm bg-white/5 transition-all duration-300 hover:bg-white/10'>
                            View Portfolio
                        </button>
                    </div>
                </div>

                {/* COLUMN-2 */}
                <div className='relative hidden lg:block z-10'>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navyblue/40 rounded-3xl z-10 pointer-events-none" />
                    <Image src="/images/banner/banner.png" alt="hero-image" width={800} height={642} className="relative z-0 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-700" priority />
                </div>

            </div>
        </div>
    )
}

export default Banner;
