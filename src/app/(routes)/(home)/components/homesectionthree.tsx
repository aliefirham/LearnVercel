'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

const HomeSectionThree = () => {
    const slides = [
        {
            title: "ONGRID",
            description: "Sistem solar panel yang terhubung dengan jaringan PLN tanpa menggunakan baterai sebagai cadangan energi listrik."
        },
        {
            title: "OFF GRID",
            description: "Sistem solar panel yang menggunakan matahari sebagai satu-satunya sumber energi dengan memanfaatkan baterai sebagai penyimpan cadangan energi (listrik), berlaku untuk wilayah yang tidak terkoneksi jaringan PLN."
        },
        {
            title: "HYBRID",
            description: "Gabungan Sistem solar panel On Grid dan Baterai sebagai Cadangan yang bisa digunakan saat terjadi pemadaman."
        },
        {
            title: "BATTERY",
            description: "Sistem penyimpanan cadangan energi yang digunakan saat terjadi pemadaman listrik (tanpa sistem solar PV dan inverter)."
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    // Data artikel untuk right content
    const articles = [
        {
            title: "Our people is the heart of our mission",
            description: "Our mission is to inspire and empower individuals and communities to make environmentally responsible decisions.",
            image: "/images/artikel/artikel (1).jpg"
        },
        {
            title: "Sustainable Energy Solutions",
            description: "Discover how our innovative solar technologies are transforming the renewable energy landscape.",
            image: "/images/artikel/artikel (2).jpg"
        },
        {
            title: "Green Technology Impact",
            description: "Learn about the positive environmental impact our solutions have made in communities worldwide.",
            image: "/images/artikel/artikel (3).jpg"
        },
        {
            title: "Green Technology Impact",
            description: "Learn about the positive environmental impact our solutions have made in communities worldwide.",
            image: "/images/artikel/artikel (3).jpg"
        },
    ];

    return (
        <section className="py-10 md:py-20 relative bg-white"> 
        <div className="px-10 py-10">
            <h2 className="text-3xl md:text-6xl font-normal text-black">PRODUCT</h2>
        </div>
            <div className="container mx-auto px-4">
                <div className="bg-[#F8F9F4] rounded-[24px] md:rounded-[48px] p-6 md:p-20">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16 max-w-7xl mx-auto">
                        {/* Left Content with Slider */}
                        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 overflow-x-hidden">
                            <div className="relative h-[200px] md:h-[300px] overflow-x-hidden">
                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        className={`absolute w-full transition-all duration-700 ease-in-out ${
                                            index === currentSlide 
                                                ? "opacity-100 translate-x-0" 
                                                : index < currentSlide 
                                                    ? "opacity-0 -translate-x-full" 
                                                    : "opacity-0 translate-x-full"
                                        }`}
                                    >
                                        <div className="w-full px-4 md:px-0">
                                            <h2 className="text-2xl md:text-5xl font-normal leading-tight mb-3 md:mb-6 text-black md:max-w-[90%]">
                                                {slide.title}
                                            </h2>
                                            <p className="text-sm md:text-lg text-gray-600 md:max-w-[90%]">
                                                {slide.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Navigasi garis horizontal */}
                            <div className="flex gap-1 md:gap-2 px-4 md:px-0">
                                {slides.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-8 md:w-16 h-0.5 md:h-1 transition-all duration-300 ${
                                            index === currentSlide ? "bg-black" : "bg-gray-200"
                                        }`}
                                        onClick={() => {
                                            setCurrentSlide(index);
                                        }}
                                        style={{ cursor: 'pointer' }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right Content with Vertical Slider */}
                        <div className="w-full md:w-1/2 relative">
                            <div className="h-[300px] md:h-[400px] relative">
                                {/* Articles Container */}
                                <div className="relative h-full overflow-hidden">
                                    {articles.map((article, index) => (
                                        <div
                                            key={index}
                                            className="absolute w-full transition-all duration-700 ease-in-out"
                                            style={{
                                                opacity: index === currentSlide ? 1 : 0,
                                                transform: `translateY(${index === currentSlide ? '0' : '100%'})`,
                                                visibility: index === currentSlide ? 'visible' : 'hidden'
                                            }}
                                        >
                                            <div className="bg-white rounded-[16px] md:rounded-[32px] p-4 md:p-8 shadow-sm">
                                                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                                                    <div className="w-full md:w-[200px] flex-shrink-0 order-2 md:order-2">
                                                        <div className="rounded-[16px] md:rounded-[24px] overflow-hidden">
                                                            <Image
                                                                src={article.image}
                                                                alt={article.title}
                                                                width={200}
                                                                height={200}
                                                                className="w-full h-[150px] md:h-[200px] object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 order-1 md:order-1">
                                                        <h3 className="text-xl md:text-3xl font-normal mb-2 md:mb-4 text-black">
                                                            {article.title}
                                                        </h3>
                                                        <p className="text-sm md:text-base text-gray-600 mb-0">
                                                            {article.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSectionThree;
