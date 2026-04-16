"use client"
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from './Contactus';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Recent Works', href: '#featured', current: false },
    { name: 'Testimonial', href: '#testimonial-section', current: false },
    { name: 'Services', href: '#services-section', current: false },
    { name: 'FAQ', href: '#faq-section', current: false },
]



const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">

                        {/* LOGO */}
                        <div className="flex flex-shrink-0 items-center">
                            <Link href="/" className='flex items-center'>
                                <Image src="/images/logo/logo.png" alt="logo" width={140} height={46} priority />
                            </Link>
                        </div>

                        {/* LINKS - Desktop */}
                        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative px-4 py-2 rounded-full text-base font-medium text-white/70 hover:text-white transition-all duration-300 group"
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 rounded-full"></span>
                                </Link>
                            ))}
                        </div>

                        {/* CTA button */}
                        <div className="hidden lg:block">
                            <Contactusform />
                        </div>

                        {/* DRAWER ICON - Mobile */}
                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-7 w-7 text-white cursor-pointer" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
