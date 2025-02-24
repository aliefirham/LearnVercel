'use client'

import { motion } from "framer-motion"

const installationFeatures = [
    {
        id: "01",
        title: "Instalasi",
        description: "Kami menyediakan instalasi lengkap dengan layanan profesional dan kompetensi berkualitas tinggi."
    },
    {
        id: "02",
        title: "Laporan Bulanan",
        description: "Kami mendukung perawatan preventif produk kami dengan mengembangkan aplikasi pemantauan mandiri berbasis IoT untuk penggunaan panel surya, sehingga kami dapat memperkirakan masa pakai produk kami."
    },
    {
        id: "03",
        title: "Pemeliharaan",
        description: "Kami menyediakan garansi dan layanan perawatan produk kami untuk memastikan perlindungan melalui penggunaan panel surya."
    },
    {
        id: "04",
        title: "Promosi Kawasan Ramah Lingkungan",
        description: "Dengan memasang panel surya, kami mempromosikan kawasan ramah lingkungan yang menunjukkan bahwa pelanggan kami mendukung energi terbarukan."
    }
]

const Installation = () => {
    return (
        <section className="py-16 md:py-24 bg-[#F8F9F4]">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">Paket Pemasangan</h2>
                    <p className="text-gray-600">Termasuk layanan lengkap untuk instalasi dan pemeliharaan</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {installationFeatures.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            className="flex gap-6"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-[#F7E733] rounded-full flex items-center justify-center">
                                <span className="text-black font-bold">{feature.id}</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-black">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Installation 