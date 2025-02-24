'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <section className="relative h-[60vh] md:h-[80vh] bg-black/60 overflow-hidden">
            <Image
                src="/images/product/product-bg.jpeg"
                alt="Solar Panel Installation"
                fill
                className="object-cover mix-blend-overlay"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <motion.h1 
                        className="text-3xl md:text-6xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Product
                    </motion.h1>
                    <motion.p 
                        className="text-lg md:text-xl max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Solusi energi surya terbaik untuk kebutuhan listrik Anda
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

export default Hero 