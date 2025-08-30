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



        <div id="services-section" className="mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 relative">
            <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />

            <h4 className="text-center text-blue text-4xl lg:text-6xl font-bold mb-10">Our Services</h4>

            {/* Tabs */}
            <div className="flex justify-center gap-6 mb-0">
                <button
                    onClick={() => setActiveTab("video")}
                    className={`px-6 py-2 rounded-full text-lg font-medium transition ${activeTab === "video"
                        ? "bg-soft text-white shadow-lg"
                        : "bg-lightgrey text-darkpurple hover:bg-soft hover:text-black"
                        }`}
                >
                    Video Editing
                </button>
                <button
                    onClick={() => setActiveTab("image")}
                    className={`px-6 py-2 rounded-full text-lg font-medium transition ${activeTab === "image"
                        ? "bg-soft text-white shadow-lg"
                        : "bg-lightgrey text-darkpurple hover:bg-soft hover:text-black"
                        }`}
                >
                    Image Editing
                </button>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {data.map((item, i) => (
                    <div key={i} className='bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 drop-shadow-[0_0_3px_white] group'>
                        <h4 className='text-4xl font-semibold mb-5 text-black'>{item.heading}</h4>
                        <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                        <h4 className='text-lg font-normal text-black mb-5'>{item.paragraph}</h4>
                        {/* <Link href="#" className='text-lg font-semibold text-white hover-underline'>
                            {item.link}
                            <ChevronRightIcon width={20} height={20} />
                        </Link> */}
                    </div>

                ))}
            </div>
        </div>
    );
};

export default OurServices;