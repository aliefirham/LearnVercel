'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface SlideContent {
  title: string
  subtitle: string
  description: string
  image: string
  logo: string
  number: number
  totalSlides: number
  link: string
}

const slides: SlideContent[] = [
  {
    title: 'Bluebird',
    subtitle: 'GEDUNG KOMERSIAL',
    description: 'Bluebird is now powered by solar energy, representing SUN Energy\'s initial venture into sustainable transportation. The solar energy system has a capacity of 215.6 kWp.',
    image: '/images/home/hybrid.png',
    logo: '/images/home/hybrid.png',
    number: 1,
    totalSlides: 3,
    link: '/projects/bluebird'
  },
  {
    title: 'Mall Taman Anggrek',
    subtitle: 'GEDUNG KOMERSIAL', 
    description: 'Sistem tenaga surya terbesar untuk mall di Indonesia dengan kapasitas 623.7 kWp, menghasilkan energi bersih untuk operasional mall.',
    image: '/images/home/offgrid.jpg',
    logo: '/images/home/offgrid.jpg',
    number: 2,
    totalSlides: 3,
    link: '/projects/mall-ta'
  },
  {
    title: 'batari',
    subtitle: 'GEDUNG KOMERSIAL',
    description: 'Sistem tenaga surya terbesar untuk mall di Indonesia dengan kapasitas 623.7 kWp, menghasilkan energi bersih untuk operasional mall.',
    image: '/images/home/panel.png',
    logo: '/images/home/panel.png',
    number: 3,
    totalSlides: 3,
    link: '/projects/mall-ta'
  }
  // Tambahkan slide lainnya sesuai kebutuhan
]

const HomeSectionFour = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        console.log('Changing to slide:', (prev + 1) % slides.length) // Debugging
        return (prev + 1) % slides.length
      })
    }, 10000)

    return () => clearInterval(timer)
  }, [])

  // Tambahkan handler untuk debugging
  const handleManualSlideChange = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-screen w-full">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              quality={100}
              sizes="100vw"
              className="object-cover object-center"
              priority={index === 0}
              onLoadingComplete={() => {}}
            />
            {/* Overlay gradien */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full">
          <div className="text-white max-w-2xl">
            <p className="text-sm mb-2">Proyek Terkemuka</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 pb-10">
              Portofolio Utama & Sorotan
            </h2>
            
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg">
              <Image
                src={slides[currentSlide].logo}
                alt={slides[currentSlide].title}
                width={120}
                height={40}
                quality={100}
                className="mb-4 object-contain"
              />
              <h3 className="text-sm text-gray-300 mb-2">
                {slides[currentSlide].subtitle}
              </h3>
              <p className="text-lg mb-6">
                {slides[currentSlide].description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                  <Link
                    href={slides[currentSlide].link}
                    className="px-4 sm:px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors text-center text-xs sm:text-base"
                  >
                    Selengkapnya
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 sm:px-6 py-2 bg-[#F7E733] text-black rounded-full hover:bg-gray-200 transition-colors text-center text-xs sm:text-base"
                  >
                    Get a Quote
                  </Link>
                </div>
                
                <div className="hidden sm:block text-2xl font-light">
                  {slides[currentSlide].number}/{slides[currentSlide].totalSlides}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tambahkan indikator slide manual */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleManualSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Debug info
      <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded">
        Current Slide: {currentSlide + 1}
      </div> */}
    </section>
  )
}

export default HomeSectionFour