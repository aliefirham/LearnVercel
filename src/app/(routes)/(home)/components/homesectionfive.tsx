'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { articles } from '@/data/articles'

const HomeSectionFive = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-5xl font-bold text-black mb-4">
                        Artikel Terbaru
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base">
                        Temukan informasi terkini seputar energi surya dan teknologi panel surya
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {articles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/article/${article.slug}`} className="group">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="relative aspect-[16/9] overflow-hidden">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {new Date(article.date).toLocaleDateString('id-ID', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {article.readTime}
                                            </div>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#F7E733] transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm md:text-base line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                    </div>
                                    <div className="px-6 pb-6">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-500">
                                                {article.author}
                                            </span>
                                            <span className="text-[#F7E733] group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-1">
                                                Baca Selengkapnya
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link 
                        href="/article"
                        className="bg-[#F7E733] text-black px-6 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-lg font-semibold hover:bg-[#e6d62f] transition-colors"
                    >
                        Lihat Semua Artikel
                        <svg className="w-6 h-6 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HomeSectionFive