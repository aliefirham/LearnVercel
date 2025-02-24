'use client'

import { useState } from 'react'
import { ArticleType } from '@/types/article'
import Image from 'next/image'
import Link from 'next/link'
import { articles } from '@/data/articles'

export default function HeadArticle() {
  const [articleList] = useState<ArticleType[]>(articles as ArticleType[])
  const [featuredArticle, ...otherArticles] = articleList

  return (
    <section className="pt-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-20">
        <div className="bg-[#F8F9F4] rounded-[24px] md:rounded-[48px] p-6 md:p-20">
          {/* Header */}
          <div className="flex items-center justify-between mb-12 max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="h-12 w-1.5 bg-[#F7E733] rounded-full" />
              <div>
                <h2 className="text-2xl md:text-5xl font-normal leading-tight text-black">BERITA & BLOG</h2>
                <p className="text-sm md:text-lg text-gray-600">Update informasi otomotif</p>
              </div>
            </div>
            <Link 
              href="/article" 
              className="px-6 py-2 bg-white shadow-md hover:bg-gray-50 text-black rounded-full transition-colors"
            >
              View All →
            </Link>
          </div>

          <div className="space-y-12 max-w-7xl mx-auto">
            {/* Featured Article */}
            <Link href={`/article/${featuredArticle.slug}`} 
              className="block bg-white rounded-[16px] md:rounded-[32px] p-4 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-2/3 relative h-[300px] md:h-[400px] rounded-[16px] md:rounded-[24px] overflow-hidden">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="w-full md:w-1/3 space-y-4">
                  <span className="inline-block rounded-full bg-[#F7E733] px-4 py-1.5 text-sm font-medium text-black">
                    {featuredArticle.readTime}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-normal text-black">{featuredArticle.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-3 text-gray-600 text-sm">
                    <span>{featuredArticle.author}</span>
                    <span>•</span>
                    <span>{featuredArticle.date}</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Other Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherArticles.map((article) => (
                <Link 
                  key={article.id} 
                  href={`/article/${article.slug}`} 
                  className="bg-white rounded-[16px] md:rounded-[32px] p-4 md:p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="space-y-4">
                    <div className="relative h-[200px] rounded-[16px] overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="inline-block rounded-full bg-[#F7E733] px-3 py-1 text-xs font-medium text-black">
                      {article.readTime}
                    </span>
                    <h3 className="text-xl font-normal text-black line-clamp-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 