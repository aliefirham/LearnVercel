'use client'

import Image from "next/image";
import Link from "next/link";
import { FaGlobeAmericas, FaPlay } from "react-icons/fa";
import { useState } from "react";

const HomeSectionTwo = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="py-10 relative bg-white text-black min-h-screen">
            <div className="container mx-auto px-4">
                {/* Corner Images */}
                <div className="absolute inset-0">
                    {/* Top Left */}
                    <div className="absolute top-32 md:top-10 left-8 md:left-32 w-[50px] md:w-[150px] h-[50px] md:h-[150px] rounded-full overflow-hidden">
                        <Image
                            src="/images/home/solarpanel.png"
                            alt="Solar Panel Field"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    
                    {/* Top Right */}
                    <div className="absolute top-32 md:top-10 right-8 md:right-32 w-[45px] md:w-[120px] h-[65px] md:h-[170px] rounded-[8px] md:rounded-[24px] overflow-hidden">
                        <Image
                            src="/images/home/engineersatwork.png"
                            alt="Engineers at Work"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    
                    {/* Bottom Left */}
                    <div className="absolute bottom-[20%] md:bottom-0 left-4 md:left-20 w-[65px] md:w-[200px] h-[65px] md:h-[200px] rounded-[8px] md:rounded-[24px] overflow-hidden bg-white">
                        <Image
                            src="/images/home/solarpanel.jpg"
                            alt="Solar Panel Bottom"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 65px, 200px"
                            priority
                        />
                    </div>
                    
                    {/* Bottom Right - Video Thumbnail */}
                    <div className="absolute bottom-[20%] md:bottom-0 right-4 md:right-20 w-[65px] md:w-[200px] h-[65px] md:h-[200px] rounded-full overflow-hidden">
                        <div 
                            className="relative w-full h-full cursor-pointer" 
                            onClick={() => setIsVideoOpen(true)}
                        >
                            <Image
                                src="/images/home/thumbnailvideo.PNG"
                                alt="Video Thumbnail"
                                fill
                                sizes="(max-width: 768px) 65px, 200px"
                                priority={true}
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                                <div className="bg-transparent rounded-full p-1 md:p-3 transform hover:scale-110 transition-transform">
                                    <FaPlay className="w-2.5 h-2.5 md:w-8 md:h-8 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center Content */}
                <div className="relative max-w-3xl mx-auto text-center pt-40 md:pt-40 mt-20 md:mt-0">
                    <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                        <span className="text-2xl md:text-4xl font-normal">Our mission</span>
                        <FaGlobeAmericas className="w-5 h-5 md:w-8 md:h-8 text-black" />
                        <span className="text-2xl md:text-4xl font-normal">is to deliver</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-normal leading-tight mb-4 md:mb-6">
                        innovative, eco-friendly solutions that support recycling and sustainable living.
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg mb-6 md:mb-8">
                        We believe in a future where style and sustainability coexist harmoniously.
                    </p>
                    <Link
                        href="/about"
                        className="inline-block bg-[#F7E733] text-black px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-medium hover:bg-[#e6d62f] transition-colors"
                    >
                        About Batarai Energy
                    </Link>
                </div>
            </div>

            {/* Video Modal */}
            {isVideoOpen && (
                <div className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center p-4">
                    <div className="relative w-full max-w-4xl aspect-video">
                        <button 
                            className="absolute -top-16 right-0 text-white hover:text-gray-300 z-[201]"
                            onClick={() => setIsVideoOpen(false)}
                        >
                            <svg 
                                className="w-8 h-8 md:w-10 md:h-10" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M6 18L18 6M6 6l12 12" 
                                />
                            </svg>
                        </button>
                        <video
                            src="/videos/home/panelsurya.mp4"
                            className="w-full h-full"
                            controls
                            autoPlay
                        >
                            Browser Anda tidak mendukung tag video.
                        </video>
                    </div>
                </div>
            )}
        </section>
    );
};

export default HomeSectionTwo;
