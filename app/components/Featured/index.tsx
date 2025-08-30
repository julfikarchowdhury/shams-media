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
            <div className=" mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10  bg-featured  rounded-3xl " id="featured">
                <div className='mx-auto max-w-7xl lg:px-2 '>

                    <div className="text-center pb-10">
                        <h3 className="text-4xl sm:text-6xl font-bold text-white my-2">Recent Works.</h3>
                        {/* <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-50 lg:mr-48 my-2">Recent Works.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-25 lg:-mr-32 my-2">Recent Works.</h3> */}
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>

                                <div className='bg-transparent m-3 pb-12 my-10 rounded-3xl'>
                                    <Image src={items.imgSrc} alt="gaby" width={636} height={620} className="rounded-2xl drop-shadow-[0_0_5px_#2cb3e9]" />
                             <div className="w-auto text-center">
  <h4 className="sm:text-5xl font-bold sm:pt-6 mt-10 text-white">
    {items.heading}
  </h4>
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
