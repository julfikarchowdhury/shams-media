
const Join = () => {
    return (
        <div className="relative my-32 py-20 overflow-hidden">
            {/* Ambient lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[400px] bg-neon/10 blur-[150px] rounded-full pointer-events-none -z-10" />

            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 relative z-10'>

                <div className="text-center mb-16">
                    <h3 className="text-neon text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4">JOIN US</h3>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white my-6 tracking-tight"> Take your business to <br className="hidden sm:block"/> the new level.</h2>
                    <p className="text-white/60 font-medium text-lg max-w-2xl mx-auto">Subscribe to our newsletter for exclusive insights, creative tips, and priority updates on our newest editing offerings to elevate your brand.</p>
                </div>

                <div className="mx-auto max-w-4xl pt-5">
                    <div className="sm:flex items-center mx-5 p-2 sm:p-2 rounded-2xl justify-between bg-white/5 border border-white/10 backdrop-blur-md sm:rounded-full shadow-2xl">
                        <div className="flex-1">
                            <input type="name" className="w-full my-2 py-4 px-6 lg:text-xl text-white placeholder:text-white/40 bg-transparent focus:outline-none" placeholder="Your name" autoComplete="off" />
                        </div>
                        <div className="hidden sm:block w-px h-12 bg-white/10 mx-2"></div>
                        <div className="flex-1">
                            <input type="email" className="w-full my-2 py-4 px-6 lg:text-xl text-white placeholder:text-white/40 bg-transparent focus:outline-none" placeholder="Your email" autoComplete="off" />
                        </div>
                        <div className="sm:mr-2 mt-4 sm:mt-0">
                            <button type="submit" className="w-full sm:w-auto py-4 px-10 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-neon shadow-[0_0_20px_rgba(255,51,51,0.4)] hover:shadow-[0_0_30px_rgba(255,51,51,0.7)] transition-all duration-300 hover:bg-red-500 hover:-translate-y-1">
                                Join!
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Join;
