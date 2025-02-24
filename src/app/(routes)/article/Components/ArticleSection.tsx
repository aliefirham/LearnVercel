'use client'

import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'

// Menggunakan data yang sama
const articles = [
  {
    id: 1,
    slug: 'perbedaan-sunroof-moonroof-dan-panorama-roof',
    title: 'Perbedaan Sunroof, Moonroof dan Panorama Roof',
    image: '/images/home/gambar1.jpg',
    date: '2024-01-20',
    excerpt: 'Memahami perbedaan antara sunroof, moonroof, dan panoramic roof pada mobil modern.',
    author: 'Tim Toyota Garut',
    readTime: '5 menit'
  },
  {
    id: 2,
    slug: 'tidak-sengaja-menginjak-pedal-gas',
    title: 'Tidak Sengaja Menginjak Pedal Gas? Ini Yang Harus Dilakukan',
    image: '/images/home/gambar2.jpg',
    date: '2024-01-19',
    excerpt: 'Panduan penting tentang apa yang harus dilakukan ketika tidak sengaja menginjak pedal gas.',
    author: 'Tim Toyota Garut',
    readTime: '4 menit'
  },
  {
    id: 3,
    slug: 'teknologi-toyota',
    title: 'Teknologi Canggih Toyota yang Membuat Berkendara Lebih Aman',
    image: '/images/home/gambar3.jpg',
    date: '2024-01-18',
    excerpt: 'Mengenal berbagai teknologi keselamatan canggih yang diterapkan pada mobil Toyota.',
    author: 'Tim Toyota Garut',
    readTime: '6 menit'
  }
]

export default function ArticleSection() {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-1 bg-blue-600 rounded-full" />
          <div>
            <h2 className="text-lg font-medium">Artikel Terbaru</h2>
            <p className="text-sm text-gray-500">Update informasi otomotif</p>
          </div>
        </div>

        {/* Articles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/article/${article.slug}`}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                    {article.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{article.author}</span>
                  <span>{format(new Date(article.date), 'd MMM yyyy', { locale: id })}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-8">
          <Link
            href="/article"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            Lihat Semua Artikel
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
} 