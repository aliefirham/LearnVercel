'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image'
import { articles } from '@/data/articles' // Import articles data
import Link from 'next/link'

interface ArticleData {
  id: number;
  slug: string;
  title: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

function ArticleDetail({ slug }: { slug: string }) {
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Find article from local data instead of fetching
    const foundArticle = articles.find(article => article.slug === slug);
    if (foundArticle) {
      setArticle(foundArticle);
    } else {
      setError('Article not found');
    }
  }, [slug]);

  if (error) {
    return (
      <div className="w-full bg-white">
        <div className="w-full min-h-screen">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-32">
            <div className="bg-[#F8F9F4] rounded-[24px] md:rounded-[48px] p-6 md:p-20">
              <div className="text-red-500 text-lg sm:text-xl font-medium text-center">
                <span className="block mb-2">⚠️</span>
                {error}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="w-full bg-white">
        <div className="w-full min-h-screen">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-32">
            <div className="bg-[#F8F9F4] rounded-[24px] md:rounded-[48px] p-6 md:p-20">
              <div className="animate-pulse flex flex-col space-y-8 w-full max-w-3xl mx-auto">
                <div className="h-8 bg-gray-200 rounded-lg w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-[300px] bg-gray-200 rounded-xl w-full"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      <div className="w-full min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-32">
          <div className="bg-[#F8F9F4] rounded-[24px] md:rounded-[48px] p-6 md:p-20">
            <article className="max-w-3xl mx-auto">
              {/* Header with yellow line */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-1.5 bg-[#F7E733] rounded-full" />
                <div>
                  <h1 className="text-2xl md:text-4xl font-normal text-black">
                    {article.title}
                  </h1>
                  <div className="flex items-center gap-3 text-gray-600 text-sm mt-2">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative h-[300px] md:h-[500px] mb-8 rounded-[16px] md:rounded-[32px] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: article.content }}
                  className="text-gray-600 leading-relaxed"
                />
              </div>

              {/* Share Buttons */}
              <div className="mt-12 p-6 bg-white rounded-[16px] shadow-sm">
                <h3 className="text-lg font-normal mb-4">Bagikan Artikel</h3>
                <div className="flex gap-4">
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

              {/* Related Articles */}
              <div className="mt-16">
                <h2 className="text-xl md:text-2xl font-normal text-black mb-8">Artikel Terkait</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {articles.filter(a => a.slug !== slug).slice(0, 2).map((relatedArticle) => (
                    <Link 
                      key={relatedArticle.id} 
                      href={`/article/${relatedArticle.slug}`} 
                      className="bg-white rounded-[16px] md:rounded-[32px] p-4 md:p-8 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="space-y-4">
                        <div className="relative h-[200px] rounded-[16px] overflow-hidden">
                          <Image
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="inline-block rounded-full bg-[#F7E733] px-3 py-1 text-xs font-medium text-black">
                          {relatedArticle.readTime}
                        </span>
                        <h3 className="text-xl font-normal text-black line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <span>{relatedArticle.author}</span>
                          <span>•</span>
                          <span>{relatedArticle.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;