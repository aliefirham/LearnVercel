'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const products = [
    {
        name: "On-Grid",
        icon: "/images/product/on-grid.png",
        description: "Sistem panel surya yang terhubung dengan jaringan listrik PLN"
    },
    {
        name: "Off-Grid",
        icon: "/images/product/off-grid.png",
        description: "Sistem panel surya mandiri tanpa koneksi ke jaringan listrik PLN"
    },
    {
        name: "Hybrid",
        icon: "/images/product/hybrid.png",
        description: "Kombinasi sistem on-grid dan off-grid untuk fleksibilitas maksimal"
    },
    {
        name: "Battery",
        icon: "/images/product/battery.png",
        description: "Solusi penyimpanan energi untuk kebutuhan listrik berkelanjutan"
    }
]

const Products = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            className="bg-[#F8F9F4] rounded-2xl p-6 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="relative w-24 h-24 mx-auto mb-4">
                                <Image
                                    src={product.icon}
                                    alt={product.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2 text-black">{product.name}</h3>
                            <p className="text-gray-600 text-sm md:text-base">{product.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products 