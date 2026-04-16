import Image from "next/image";
import Link from "next/link";

const instaImages = [
    { src: "/images/insta/insta1.png", alt: "instaOne" },
    { src: "/images/insta/insta2.png", alt: "instaTwo" },
    { src: "/images/insta/insta3.png", alt: "instaThree" },
    { src: "/images/insta/insta4.png", alt: "instaFour" },
]

const Insta = () => {
    return (
        <div className="relative mx-auto max-w-2xl pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8 overflow-hidden">
            {/* Section header */}
            <div className="text-center mb-14">
                <h3 className="text-neon text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4">FOLLOW US</h3>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">@theshams.media</h2>
                <p className="mt-4 text-white/50 text-lg">Our latest work on Instagram</p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {instaImages.map((img, i) => (
                    <Link key={i} href="https://instagram.com" target="_blank" className="group relative block overflow-hidden rounded-[24px] border border-white/10 hover:border-neon/40 transition-all duration-500">
                        <div className="relative aspect-square overflow-hidden">
                            <Image
                                src={img.src}
                                fill
                                alt={img.alt}
                                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-navyblue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
                                <div className="flex flex-col items-center gap-3">
                                    <Image src="/images/insta/instagram.svg" alt="instagram" width={44} height={44} className="drop-shadow-[0_0_10px_rgba(255,51,51,0.8)] scale-75 group-hover:scale-100 transition-transform duration-500" />
                                    <span className="text-white font-semibold text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">View Post</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Insta
