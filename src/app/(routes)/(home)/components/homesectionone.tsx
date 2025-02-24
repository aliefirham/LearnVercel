'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const HomeSectionOne = () => {
    const images = [
        "/images/home/homemaninsection1.jpg",
        "/images/home/homemaninsection2.jpg",
        "/images/home/homemaninsection3.jpg",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[100vh] overflow-hidden">
                {/* Slider Images */}
                <div className="absolute inset-0">
                    {images.map((image, index) => (
                        <div
                            key={image}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                index === currentImageIndex ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    fill
                                    sizes="100vw"
                                    className="object-cover object-[60%_center] md:object-center scale-[1.3] md:scale-100"
                                    style={{
                                        objectPosition: index === 0 ? '65% center' : 
                                                      index === 1 ? '60% center' : 
                                                      '70% center'
                                    }}
                                    quality={90}
                                    priority={index === 0}
                                />
                            </div>
                        </div>
                    ))}
                    <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Hero Content - Only This Moves Up */}
                <div className="relative z-20 container mx-auto px-4 h-full">
                    <div className="h-full flex items-start md:items-center pt-32 md:pt-0">
                        <div className="max-w-3xl mx-auto text-center text-white translate-y-[30px] md:translate-y-[-80px]">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-4 leading-tight px-4">
                                Our services provide renewable energy solutions for a better future.
                            </h1>
                            <p className="text-sm md:text-base mb-6 opacity-90 font-light max-w-2xl mx-auto px-4">
                                From cutting-edge green designs to recycling programs, we&apos;re dedicated to transforming the world with every eco-friendly product
                            </p>
                            <div className="inline-flex items-center bg-[#F7E733] rounded-full p-1 pr-2">
                                <span className="px-4 sm:px-6 py-2 text-sm text-black font-medium">Get Started</span>
                                <div className="bg-black rounded-full p-2">
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cards Section */}
            <section className="relative z-10 -mt-[300px] xs:-mt-[350px] sm:-mt-[280px] md:-mt-[200px]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-32 max-w-5xl mx-auto">
                        {/* Card 1 */}
                        <div className="flex bg-black/30 backdrop-blur-sm rounded-[20px] md:rounded-[24px] overflow-hidden h-[100px] md:h-[140px] mx-2 md:mx-10">
                            <div className="w-[35%] md:w-[45%] relative">
                                <Image
                                    src="/images/home/homemaninsection1.jpg"
                                    alt="Sustainable Design"
                                    fill
                                    className="object-cover rounded-l-[20px] md:rounded-l-[24px]"
                                />
                            </div>
                            <div className="w-[65%] md:w-[55%] p-2 md:p-3">
                                <h3 className="text-xs md:text-sm lg:text-base font-medium mb-0.5 md:mb-1 text-white">
                                    Were Sustainability meets Style.
                                </h3>
                                <p className="mb-1 md:mb-1.5 text-gray-300 text-[8px] md:text-[10px] leading-tight">
                                    With green designs and recycling, we&apos;re making the world eco-friendly.
                                </p>
                                <Link 
                                    href="/services" 
                                    className="text-[#F7E733] underline text-[8px] md:text-[10px] hover:text-[#e6d62f]"
                                >
                                    Discover Our Services
                                </Link>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-black/30 backdrop-blur-sm rounded-[20px] md:rounded-[24px] p-2 md:p-3 text-white h-[100px] md:h-[140px] mx-2 md:mx-10">
                            <div className="mb-1 md:mb-2">
                                <div className="bg-[#F7E733] rounded-full p-1.5 md:p-2 inline-block">
                                    <Image
                                        src="/images/home/iconpanelsurya.png"
                                        alt="Solar Panel Icon"
                                        width={20}
                                        height={20}
                                        className="object-contain w-4 h-4 md:w-6 md:h-6"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xs md:text-sm lg:text-base font-medium mb-0.5 md:mb-1">
                                Efficient solar panels
                            </h3>
                            <p className="text-gray-300 text-[8px] md:text-[10px] leading-tight">
                                Our solar panels deliver maximum efficiency, ensuring you get the most out of every ray of sunshine.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeSectionOne;