import Image from "next/image";
import Link from "next/link";

const products = [
    {
        id: 1,
        section: "Menu",
        link: ['Home', 'Popular', 'About', 'Contact'],
    },
    {
        id: 2,
        section: "Category",
        link: ['Design', 'Mockup', 'View all', 'Log In']
    },
    {
        id: 3,
        section: "Pages",
        link: ['404', 'Instructions', 'License']
    },
    {
        id: 4,
        section: "Others",
        link: ['Styleguide', 'Changelog']
    }
]

const socialLinks = [
    { href: "https://facebook.com", icon: '/images/footer/vec.svg', alt: 'facebook', w: 15, h: 20 },
    { href: "https://twitter.com", icon: '/images/footer/twitter.svg', alt: 'twitter', w: 20, h: 20 },
    { href: "https://instagram.com", icon: '/images/footer/instagram.svg', alt: 'instagram', w: 20, h: 20 },
]

const Footer = () => {
    return (
        <footer className="relative bg-navyblue border-t border-white/5 overflow-hidden" id="first-section">
            {/* Ambient gradient */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-12 relative z-10">

                {/* Top grid */}
                <div className="grid grid-cols-1 gap-y-12 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* Brand column */}
                    <div className='col-span-4'>
                        <Link href="/" className="block mb-8">
                            <Image src="/images/logo/logo.png" alt="logo" width={140} height={47} />
                        </Link>
                        <p className="text-white/50 mb-8 max-w-xs leading-relaxed">
                            Elevating brands through powerful visual storytelling and premium editing services.
                        </p>
                        <div className='flex gap-3'>
                            {socialLinks.map((s, i) => (
                                <Link key={i} href={s.href} target="_blank" className='footer-icons'>
                                    <Image src={s.icon} alt={s.alt} width={s.w} height={s.h} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {products.map((product) => (
                        <div key={product.id} className="col-span-2">
                            <p className="text-white text-lg font-bold mb-6 tracking-wider uppercase">{product.section}</p>
                            <ul className="space-y-4">
                                {product.link.map((link: string, index: number) => (
                                    <li key={index}>
                                        <Link href="/" className="text-white/50 text-base font-medium hover:text-neon transition-colors duration-200 space-links">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className='text-white/40 text-sm'>@2024 - All Rights Reserved by <Link href="#" target="_blank" className="text-neon hover:underline">The Shams Media</Link></p>
                        <div className="flex items-center gap-6">
                            <Link href="/" className="text-white/40 text-sm hover:text-white/70 transition-colors">Privacy policy</Link>
                            <span className="w-px h-4 bg-white/20"></span>
                            <Link href="/" className="text-white/40 text-sm hover:text-white/70 transition-colors">Terms & conditions</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
