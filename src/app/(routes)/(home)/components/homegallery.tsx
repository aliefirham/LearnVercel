'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const galleryItems = [
    {
        id: 1,
        title: 'Residential',
        category: 'Solar Panel',
        image: '/images/gallery/gallery (1).png',
        description: 'Sistem tenaga surya untuk rumah tinggal dengan kapasitas mulai dari 3 kWp hingga 20 kWp.'
    },
    {
        id: 2,
        title: 'Commercial',
        category: 'Solar Panel', 
        image: '/images/gallery/gallery (2).png',
        description: 'Sistem tenaga surya untuk bangunan komersial dengan kapasitas mulai dari 20 kWp hingga 1 MWp.'
    },
    {
        id: 3,
        title: 'Industrial',
        category: 'Solar Panel',
        image: '/images/gallery/gallery (3).png',
        description: 'Sistem tenaga surya untuk industri dengan kapasitas mulai dari 100 kWp hingga 10 MWp.'
    },
    {
        id: 4,
        title: 'Utility Scale',
        category: 'Solar Panel',
        image: '/images/gallery/gallery (4).png',
        description: 'Sistem tenaga surya skala utilitas dengan kapasitas mulai dari 1 MWp.'
    },
    {
        id: 5,
        title: 'Carport',
        category: 'Solar Panel',
        image: '/images/gallery/gallery (5).png',
        description: 'Sistem tenaga surya untuk carport dengan kapasitas yang disesuaikan dengan kebutuhan.'
    },
    {
        id: 6,
        title: 'Floating',
        category: 'Solar Panel',
        image: '/images/gallery/gallery (6).png',
        description: 'Sistem tenaga surya terapung di atas air dengan kapasitas yang disesuaikan dengan kebutuhan.'
    },
    {
        id: 7,
        title: 'Rooftop Commercial',
        category: 'Solar Panel',
        image: '/images/gallery/gallery (7).png',
        description: 'Sistem tenaga surya untuk atap bangunan komersial dengan kapasitas optimal.'
    },
    {
        id: 8,
        title: 'Ground Mounted',
        category: 'Solar Panel',
        image: '/images/gallery/gallery (8).png',
        description: 'Sistem tenaga surya yang dipasang di tanah untuk area luas.'
    },
    {
        id: 9,
        title: 'Hybrid System',
        category: 'Solar Panel',
        image: '/images/gallery/gallery (9).png',
        description: 'Sistem tenaga surya hybrid dengan baterai penyimpanan energi.'
    },
    {
        id: 10,
        title: 'Agricultural',
        category: 'Solar Panel',
        image: '/images/gallery/gallery (10).png',
        description: 'Sistem tenaga surya untuk sektor pertanian dan perkebunan.'
    },
    {
        id: 11,
        title: 'Educational',
        category: 'Solar Panel',
        image: '/images/gallery/gallery (11).png',
        description: 'Sistem tenaga surya untuk institusi pendidikan dan kampus.'
    },
    {
        id: 12,
        title: 'Government',
        category: 'Solar Panel',
        image: '/images/gallery/gallery (12).png',
        description: 'Sistem tenaga surya untuk gedung dan fasilitas pemerintah.'
    }
]

const HomeGallery = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [hoveredItem, setHoveredItem] = useState<number | null>(null)

    const handleNext = () => {
        setCurrentIndex((prev) => 
            prev + 3 >= galleryItems.length ? 0 : prev + 3
        )
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => 
            prev - 3 < 0 ? Math.floor((galleryItems.length - 1) / 3) * 3 : prev - 3
        )
    }

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 text-black">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Projects</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Kami telah mengimplementasikan berbagai proyek energi surya untuk berbagai sektor
                    </p>
                </div>

                {/* Gallery Slider */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="overflow-hidden">
                        <motion.div 
                            className="flex gap-4 md:gap-6"
                            initial={false}
                            animate={{ x: `calc(-${currentIndex / 3 * 100}%)` }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            {galleryItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    className="relative flex-shrink-0 w-full sm:w-[calc(33.333%-16px)] h-[300px] md:h-[400px] cursor-pointer overflow-hidden rounded-2xl"
                                    onHoverStart={() => setHoveredItem(item.id)}
                                    onHoverEnd={() => setHoveredItem(null)}
                                    onClick={() => setSelectedImage(item.id)}
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            quality={90}
                                            className={`object-cover transition-transform duration-700
                                                ${hoveredItem === item.id ? 'scale-110' : 'scale-100'}`}
                                            priority
                                        />
                                        <motion.div 
                                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                <motion.div
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ 
                                                        y: hoveredItem === item.id ? 0 : 20, 
                                                        opacity: hoveredItem === item.id ? 1 : 0 
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <p className="text-sm font-medium text-[#F7E733] mb-2">{item.category}</p>
                                                    <h3 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                                                    <p className="text-sm md:text-base opacity-90">{item.description}</p>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {Array.from({ length: Math.ceil(galleryItems.length / 3) }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index * 3)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    Math.floor(currentIndex / 3) === index 
                                        ? 'bg-[#F7E733] w-4' 
                                        : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Modal untuk tampilan detail */}
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden" 
                             onClick={(e) => e.stopPropagation()}>
                            <button
                                className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                                onClick={() => setSelectedImage(null)}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            
                            <div className="flex flex-col md:flex-row">
                                <div className="relative w-full md:w-2/3 h-[300px] md:h-[400px]">
                                    <Image
                                        src={galleryItems.find(item => item.id === selectedImage)?.image || ''}
                                        alt="Selected project"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 66vw"
                                        quality={90}
                                        className="object-cover object-center"
                                        priority
                                    />
                                </div>
                                <div className="p-6 md:w-1/3 bg-white">
                                    <p className="text-sm font-medium text-[#F7E733]">
                                        {galleryItems.find(item => item.id === selectedImage)?.category}
                                    </p>
                                    <h3 className="text-2xl font-bold mb-4">
                                        {galleryItems.find(item => item.id === selectedImage)?.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {galleryItems.find(item => item.id === selectedImage)?.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    )
}

export default HomeGallery