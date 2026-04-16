"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    heading: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        heading: 'Cinematic video editing for a tech brand.',
        imgSrc: '/images/featured/feat1.jpg',
    },
    {
        heading: 'Creative social media poster design.',
        imgSrc: '/images/featured/feat2.jpg',
    },
    {
        heading: 'Promotional short video editing.',
        imgSrc: '/images/featured/feat1.jpg',
    },
    {
        heading: 'Professional product photo retouching.',
        imgSrc: '/images/featured/feat2.jpg',
    }

]

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            speed: 500,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 800,
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
            <div className="mx-auto max-w-7xl px-4 py-12 lg:py-20 my-12 lg:my-24 lg:px-10 relative" id="featured">
                {/* Background ambient light */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-soft/20 blur-[150px] pointer-events-none -z-10 rounded-full" />
                
                <div className='mx-auto max-w-7xl lg:px-2'>
                    <div className="text-center pb-10 lg:pb-16">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight">Recent Works.</h3>
                        <p className="mt-3 text-base lg:text-lg text-white/50 max-w-2xl mx-auto">Take a look at some of our most recent and exciting projects.</p>
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="px-3">
                                <div className='group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 my-10 rounded-[32px] overflow-hidden hover:bg-white/10 transition-colors duration-500'>
                                    {/* Abstract glow inside card */}
                                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon/20 blur-[60px] rounded-full pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100" />
                                    
                                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-8">
                                        <Image src={items.imgSrc} alt="project-image" layout="fill" objectFit="cover" className="transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="w-full text-center relative z-10 px-4">
                                        <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4 line-clamp-2">
                                            {items.heading}
                                        </h4>
                                        <div className="inline-flex items-center text-neon font-semibold text-sm tracking-widest uppercase cursor-pointer hover:text-white transition-colors">
                                            View Project <span className="ml-2">→</span>
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
