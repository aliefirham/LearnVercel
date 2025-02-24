'use client'

import { motion } from "framer-motion"

const advantages = [
    "Pionir penyedia PLTS yang mempunyai in-house control sehingga memiliki quality control yang terjaga",
    "Telah menangani 100+ client mulai dari Perumahan, Industri, dan Rumahan",
    "Paket pemasangan unggulan sistem Hybrid yang anda dengan Batere original bar quality",
    "Memiliki energi hingga malam hari bahkan saat hujan sekalipun",
    "7% lebih hemat dari listrik biasa"
]

const Advantages = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <motion.h2 
                    className="text-2xl md:text-4xl font-bold mb-12 text-center text-black"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Keunggulan
                </motion.h2>
                <div className="max-w-4xl mx-auto">
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={index}
                            className="flex items-start gap-4 mb-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex-shrink-0 w-6 h-6 bg-[#F7E733] rounded-full flex items-center justify-center mt-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-gray-700">{advantage}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Advantages 