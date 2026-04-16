"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Robert Fox",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Leslie Alexander",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Cody Fisher",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/testimonial/user3.svg',
    },
    {
        name: "Robert Fox",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Leslie Alexander",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Cody Fisher",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/testimonial/user3.svg',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="relative pt-40 pb-32 lg:py-32 overflow-hidden" id="testimonial-section">
                {/* Background ambient lighting */}
                <div className="absolute bottom-0 left-0 w-1/2 h-[500px] bg-soft/30 blur-[150px] pointer-events-none -z-10 rounded-full" />
                
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 relative z-10'>

                    <div className="text-center mb-20 lg:mb-24">
                        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white my-4 tracking-tight">Our clients, <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-pink-500">Their words.</span></h3>
                        <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">Don&apos;t just take our word for it. Here&apos;s what others have to say.</p>
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="px-3">
                                <div className='bg-white/5 border border-white/10 backdrop-blur-md p-8 lg:p-10 my-10 rounded-[32px] relative group hover:border-white/20 hover:bg-white/10 transition-all duration-300'>
                                    {/* Glass avatar cutout simulation */}
                                    <div className="absolute -top-10 left-10 p-2 bg-navyblue rounded-full">
                                        <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="rounded-full bg-white/10" />
                                    </div>
                                    <div className="mt-6 mb-8 relative">
                                        <div className="absolute -top-6 -left-4 text-6xl text-white/10 font-serif leading-none">&ldquo;</div>
                                        <h4 className='text-lg lg:text-xl font-medium text-white/80 relative z-10'>{items.comment}</h4>
                                    </div>
                                    <hr className="border-white/10 mb-6" />
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
                                        <div>
                                            <h3 className='text-xl font-bold text-white'>{items.name}</h3>
                                            <h3 className='text-sm font-medium text-white/50'>{items.profession}</h3>
                                        </div>
                                        <div className="flex gap-1">
                                            <StarIcon width={20} className="text-neon" />
                                            <StarIcon width={20} className="text-neon" />
                                            <StarIcon width={20} className="text-neon" />
                                            <StarIcon width={20} className="text-neon" />
                                            <StarIcon width={20} className="text-neon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
