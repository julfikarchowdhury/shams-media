"use client"
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import React, { useState } from "react";

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const videoServices = [
    {
        heading: "Reels & Shorts",
        imgSrc: "/images/aboutus/reels.svg",
        paragraph: "Engaging edits for TikTok, Instagram, YouTube & Facebook.",
        link: "Learn more"
    },
    {
        heading: "Full-Length Videos",
        imgSrc: "/images/aboutus/longvid.svg",
        paragraph: "Professional editing for vlogs, episodes & documentaries.",
        link: "Learn more"
    },
    {
        heading: "Promotional Videos",
        imgSrc: "/images/aboutus/promo.svg",
        paragraph: "Eye-catching promos that boost brand awareness & sales.",
        link: "Learn more"
    },
    {
        heading: "Motion Graphics",
        imgSrc: "/images/aboutus/motion.svg",
        paragraph: "Dynamic motion graphics that bring ideas to life.",
        link: "Learn more"
    },
    {
        heading: "Ad Video Editing",
        imgSrc: "/images/aboutus/ads.svg",
        paragraph: "High-converting ads crafted for campaigns.",
        link: "Learn more"
    },
    {
        heading: "Wedding & Event Editing",
        imgSrc: "/images/aboutus/wedding.svg",
        paragraph: "Cinematic storytelling for weddings & events.",
        link: "Learn more"
    }
];

const imageServices = [
    {
        heading: "Background Removal",
        imgSrc: "/images/aboutus/bgremove.svg",
        paragraph: "Clean background removal for crisp product images.",
        link: "Learn more"
    },
    {
        heading: "Ghost Mannequin",
        imgSrc: "/images/aboutus/mannequin.svg",
        paragraph: "Perfect ghost mannequin edits for apparel.",
        link: "Learn more"
    },
    {
        heading: "Image Retouching",
        imgSrc: "/images/aboutus/retouch.svg",
        paragraph: "High-end retouching that enhances details.",
        link: "Learn more"
    },
    {
        heading: "Image Masking",
        imgSrc: "/images/aboutus/masking.svg",
        paragraph: "Advanced masking for hair & complex objects.",
        link: "Learn more"
    },
    {
        heading: "Color Correction",
        imgSrc: "/images/aboutus/color.svg",
        paragraph: "Professional color grading & correction.",
        link: "Learn more"
    },
    {
        heading: "Multi-Path Editing",
        imgSrc: "/images/aboutus/multipath.svg",
        paragraph: "Precise path editing for eCommerce.",
        link: "Learn more"
    },
    {
        heading: "Thumbnail Design",
        imgSrc: "/images/aboutus/thumbnail.svg",
        paragraph: "Click-worthy thumbnails that grab attention.",
        link: "Learn more"
    },
    {
        heading: "Slideshow & Presentations",
        imgSrc: "/images/aboutus/slideshow.svg",
        paragraph: "Elegant slideshows & animated presentations.",
        link: "Learn more"
    },
    {
        heading: "Corporate Editing",
        imgSrc: "/images/aboutus/corporate.svg",
        paragraph: "Polished edits for corporate events & training.",
        link: "Learn more"
    }
];


const OurServices = () => {
    const [activeTab, setActiveTab] = useState<"video" | "image">("video");

    const data = activeTab === "video" ? videoServices : imageServices;

    return (



        <div id="services-section" className="mx-auto max-w-7xl px-4 py-12 lg:py-20 my-12 lg:my-24 lg:px-10 relative">
            {/* Ambient Background Lights */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon/10 blur-[150px] rounded-full pointer-events-none -z-10" />
            
            <h4 className="text-center text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-pink-500">Services</span></h4>

            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-16">
                <button
                    onClick={() => setActiveTab("video")}
                    className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${activeTab === "video"
                        ? "bg-neon text-white shadow-[0_0_20px_rgba(255,51,51,0.5)]"
                        : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                        }`}
                >
                    Video Editing
                </button>
                <button
                    onClick={() => setActiveTab("image")}
                    className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${activeTab === "image"
                        ? "bg-neon text-white shadow-[0_0_20px_rgba(255,51,51,0.5)]"
                        : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                        }`}
                >
                    Image Editing
                </button>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {data.map((item, i) => (
                    <div key={i} className='bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 rounded-[32px] pt-8 px-7 pb-8 group relative overflow-hidden h-full flex flex-col justify-start items-start w-full transform hover:-translate-y-1'>
                        {/* Hover glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon/10 blur-[50px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="bg-white/10 p-4 rounded-2xl mb-6">
                            <Image src={item.imgSrc} alt={item.heading} width={64} height={64} className="group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h4 className='text-3xl font-bold mb-4 text-white'>{item.heading}</h4>
                        <p className='text-lg font-medium text-white/60 mb-5 flex-grow'>{item.paragraph}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;