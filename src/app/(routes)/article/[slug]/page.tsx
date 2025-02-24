'use client'

import { useParams } from 'next/navigation'
import { articles } from '@/data/articles'
import Image from 'next/image'
import Link from 'next/link'
import { useMenu } from '@/lib/hooks/useMenu'

export default function ArticleDetail() {
  const params = useParams<{ slug: string }>()
  const { products } = useMenu()
  const article = articles.find(a => a.slug === params.slug)
  const relatedArticles = articles.filter(a => a.slug !== params.slug).slice(0, 2)

  if (!article) {
    return <div>Artikel tidak ditemukan</div>
  }

  return (
    <div className="w-full bg-white">
      <div className="w-full min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-32">
          <div className="bg-[#F8F9F4] rounded-[24px] md:rounded-[48px] p-6 md:p-20">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Article Content */}
              <div className="w-full lg:w-2/3">
                <article className="mb-12">
                  {/* Header with yellow line */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-12 w-1.5 bg-[#F7E733] rounded-full" />
                    <div>
                      <h1 className="text-2xl md:text-4xl font-normal text-black">{article.title}</h1>
                      <div className="flex items-center gap-3 text-gray-600 text-sm mt-2">
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative aspect-video w-full mb-8 rounded-[16px] md:rounded-[32px] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div 
                    className="prose prose-lg max-w-none text-gray-600"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </article>

                {/* Related Articles */}
                <div className="border-t pt-6 md:pt-8">
                  <h2 className="text-lg md:text-2xl font-normal text-black mb-6">Artikel Terkait</h2>
                  {/* Mobile View */}
                  <div className="grid grid-cols-2 gap-3 sm:hidden">
                    {relatedArticles.map((relatedArticle) => (
                      <Link 
                        href={`/article/${relatedArticle.slug}`}
                        key={relatedArticle.id}
                        className="group bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <div className="relative aspect-[16/9] w-full overflow-hidden">
                          <Image 
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            fill
                            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-2">
                          <span className="inline-block rounded-full bg-[#F7E733] px-2 py-0.5 text-[10px] font-medium text-black mb-1">
                            {relatedArticle.readTime}
                          </span>
                          <h3 className="text-[11px] font-normal mb-1 group-hover:text-[#F7E733] transition-colors line-clamp-2">
                            {relatedArticle.title}
                          </h3>
                          <div className="flex items-center justify-between text-[10px] text-gray-500">
                            <span>{relatedArticle.author}</span>
                            <span>{relatedArticle.date}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Desktop View */}
                  <div className="hidden sm:grid grid-cols-2 gap-6">
                    {relatedArticles.map((relatedArticle) => (
                      <Link 
                        href={`/article/${relatedArticle.slug}`}
                        key={relatedArticle.id}
                        className="group bg-white rounded-[16px] md:rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-[16px] md:rounded-t-[32px]">
                          <Image 
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            fill
                            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4 md:p-6">
                          <span className="inline-block rounded-full bg-[#F7E733] px-3 py-1 text-xs font-medium text-black mb-2">
                            {relatedArticle.readTime}
                          </span>
                          <h3 className="text-base md:text-lg font-normal mb-2 group-hover:text-[#F7E733] transition-colors line-clamp-2">
                            {relatedArticle.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                            {relatedArticle.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>{relatedArticle.author}</span>
                            <span>{relatedArticle.date}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar with Products */}
              <aside className="w-full lg:w-1/3 space-y-6">
                <div className="bg-white rounded-[16px] md:rounded-[32px] p-6 shadow-sm">
                  <h2 className="text-xl font-normal mb-6 text-black">Produk Terkait</h2>
                  <div className="space-y-4">
                    {products.slice(0, 3).map((product) => (
                      <div key={product.id} className="bg-[#F8F9F4] rounded-[16px] hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-4 p-4">
                          <div className="relative w-20 h-20 flex-shrink-0">
                            <Image
                              src={product.image}
                              alt={product.title}
                              fill
                              className="object-cover rounded-[8px]"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-normal text-gray-900 truncate">
                              {product.title}
                            </h3>
                            <p className="text-sm text-gray-500 truncate">{product.description}</p>
                            {/* <p className="text-sm font-medium text-black mt-1">Rp. {product.price}</p> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link 
                      href="/product" 
                      className="block text-center bg-[#F7E733] text-black px-4 py-2 rounded-full hover:bg-[#e6d62f] transition-colors"
                    >
                      Lihat Semua Produk
                    </Link>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="bg-white rounded-[16px] md:rounded-[32px] p-6 shadow-sm">
                  <h3 className="text-lg font-normal mb-4 text-black">Bagikan Artikel</h3>
                  <div className="flex space-x-4">
                    <button className="p-2 bg-[#F7E733] text-black rounded-full hover:bg-[#e6d62f] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                      </svg>
                    </button>
                    <button className="p-2 bg-[#F7E733] text-black rounded-full hover:bg-[#e6d62f] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </button>
                    <button className="p-2 bg-[#F7E733] text-black rounded-full hover:bg-[#e6d62f] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 3.553a12.018 12.018 0 00-8.485-3.553c-6.627 0-12 5.373-12 12 0 2.127.548 4.209 1.593 6.053l-1.555 5.947 6.047-1.555c1.844 1.045 3.926 1.593 6.053 1.593 6.627 0 12-5.373 12-12 0-3.206-1.248-6.217-3.553-8.485zm-8.485 18.447c-2.017 0-3.984-.523-5.73-1.523l-.41-.248-4.25 1.092 1.092-4.25-.248-.41a9.944 9.944 0 01-1.523-5.73c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 