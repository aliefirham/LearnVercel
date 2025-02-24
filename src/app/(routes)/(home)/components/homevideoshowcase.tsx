'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaYoutube, FaInstagram } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const socialContent = {
    youtube: {
        name: 'YouTube',
        icon: FaYoutube,
        url: 'https://youtube.com/@batarienergy',
        color: 'hover:text-red-600',
        content: [
            {
                type: 'video',
                thumbnail: "/images/home/thumbnail.png",
                title: "BATARI ENERGY AT SHELL LIVE WIRE",
                videoUrl: "https://youtu.be/66ldET0A2-k?si=AS-1h43_FkPnuHqL"
            },
            {
                type: 'video',
                thumbnail: "/images/home/thumbnail.png",
                title: "Introduction to Batari Energy",
                videoUrl: "https://youtu.be/xf_T_tzgcLU?si=dKriK1Z8eZ88iIJl"
            }
        ]
    },
    instagram: {
        name: 'Instagram',
        icon: FaInstagram,
        url: 'https://instagram.com/batari.indonesia',
        color: 'hover:text-pink-600',
        content: [
            {
                type: 'image',
                image: '/images/home/instagram (1).jpeg',
                caption: 'Latest project installation'
            },
            {
                type: 'image',
                image: '/images/home/instagram (2).jpeg',
                caption: 'Team at work'
            },
            {
                type: 'image',
                image: '/images/home/instagram (1).png',
                caption: 'Solar panel showcase'
            }
        ]
    },
    // facebook: {
    //     name: 'Facebook',
    //     icon: FaFacebookSquare,
    //     url: 'https://facebook.com/batarienergy',
    //     color: 'hover:text-blue-500',
    //     content: [
    //         {
    //             type: 'image',
    //             image: 'https://www.instagram.com/p/CyAwQFvr8U9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    //             caption: 'Company updates'
    //         },
    //         {
    //             type: 'image',
    //             image: '/images/social/fb-2.jpg',
    //             caption: 'Recent achievements'
    //         }
    //     ]
    // }
}

const HomeVideoShowcase: React.FC = () => {
    const [activeVideo, setActiveVideo] = useState<number | null>(null)
    const [hoveredPlatform, setHoveredPlatform] = useState<keyof typeof socialContent | null>(null)

    const handleIconClick = (key: keyof typeof socialContent) => {
        if (hoveredPlatform === key) {
            setHoveredPlatform(null)
        } else {
            setHoveredPlatform(key)
        }
    }

    const renderPlatformIcon = (platform: keyof typeof socialContent) => {
        const PlatformIcon = socialContent[platform].icon
        if (platform === 'instagram') {
            return <PlatformIcon className="w-8 h-8 text-[#E1306C]" />
        }
        return <PlatformIcon className={`w-8 h-8 ${platform === 'youtube' ? 'text-[#FF0000]' : ''}`} />
    }

    return (
        <section className="py-8 md:py-10 bg-[#F8F9F4] relative">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-2xl md:text-5xl font-bold mb-8 md:mb-16 text-black">Ikuti Media Sosial Kami</h2>
                    
                    {/* Social Media Icons */}
                    <div className="flex justify-center gap-8 md:gap-12 mb-6 md:mb-8">
                        {Object.entries(socialContent).map(([key, social]) => (
                            <motion.div
                                key={key}
                                className="relative z-10"
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                onClick={() => handleIconClick(key as keyof typeof socialContent)}
                            >
                                <div className={`cursor-pointer text-gray-600 transition-all duration-300 ${social.color} hover:scale-110`}>
                                    <social.icon className="w-10 h-10 md:w-16 md:h-16" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Content Container */}
                    <AnimatePresence>
                        {hoveredPlatform && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ 
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.3 }
                                }}
                                exit={{ 
                                    opacity: 0,
                                    y: -20,
                                    transition: { duration: 0.2 }
                                }}
                                className="relative mx-auto max-w-5xl"
                            >
                                <motion.div
                                    className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                >
                                    <div className="p-4 md:p-8">
                                        {/* Platform Header */}
                                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                                            {renderPlatformIcon(hoveredPlatform)}
                                            <Link 
                                                href={socialContent[hoveredPlatform].url}
                                                target="_blank"
                                                className="group"
                                            >
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2">
                                                    {socialContent[hoveredPlatform].name}
                                                    <svg 
                                                        className="w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 transition-opacity" 
                                                        fill="none" 
                                                        stroke="currentColor" 
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path 
                                                            strokeLinecap="round" 
                                                            strokeLinejoin="round" 
                                                            strokeWidth={2} 
                                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                                                        />
                                                    </svg>
                                                </h3>
                                            </Link>
                                        </div>

                                        {/* Platform Content */}
                                        {hoveredPlatform === 'youtube' ? (
                                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                                                {socialContent.youtube.content.map((item, index) => (
                                                    <motion.div 
                                                        key={index}
                                                        className="relative aspect-video cursor-pointer group rounded-xl md:rounded-2xl overflow-hidden"
                                                        whileHover={{ scale: 1.02 }}
                                                        onClick={() => setActiveVideo(index)}
                                                    >
                                                        <Image
                                                            src={item.thumbnail}
                                                            alt={item.title}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:opacity-90 transition-opacity">
                                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                                <FaYoutube className="w-16 h-16 text-red-600 mb-4" />
                                                                <h4 className="text-white text-lg font-semibold px-4 text-center">
                                                                    {item.title}
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
                                                {socialContent[hoveredPlatform].content.map((item, index) => (
                                                    <motion.div 
                                                        key={index} 
                                                        className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden"
                                                        whileHover={{ scale: 1.02 }}
                                                    >
                                                        <Image
                                                            src={item.image}
                                                            alt={item.caption}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                        <motion.div 
                                                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                                                            whileHover={{ opacity: 1 }}
                                                        >
                                                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                                                <p className="text-white text-sm font-medium">
                                                                    {item.caption}
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Footer with Link */}
                                    <div className="border-t border-gray-100 p-3 md:p-4 bg-gray-50">
                                        <Link 
                                            href={socialContent[hoveredPlatform].url}
                                            target="_blank"
                                            className="text-gray-600 hover:text-gray-900 text-xs md:text-sm font-medium flex items-center justify-center gap-2"
                                        >
                                            Kunjungi {socialContent[hoveredPlatform].name}
                                            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Simple Divider */}
            <div className="absolute bottom-0 left-0 right-0">
                <div className="h-16 md:h-24 bg-gradient-to-b from-[#F8F9F4] to-white" />
                <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            </div>

            {/* Video Modal */}
            {activeVideo !== null && hoveredPlatform === 'youtube' && (
                <div 
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setActiveVideo(null)}
                >
                    <div className="relative w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden">
                        <iframe
                            src={socialContent.youtube.content[activeVideo].videoUrl.replace('youtu.be/', 'youtube.com/embed/')}
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        <button
                            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                            onClick={(e) => {
                                e.stopPropagation()
                                setActiveVideo(null)
                            }}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default HomeVideoShowcase 