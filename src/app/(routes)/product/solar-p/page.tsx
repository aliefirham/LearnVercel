'use client'

import Image from 'next/image'

const SolarPPage = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section with Right Image */}
      <div className="relative h-[50vh] md:h-[60vh] bg-blue-500">
        <div className="absolute inset-0">
          <Image
            src="/images/product/solar-p/solar-p (1).jpeg"
            alt="Solar Panel Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/30" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-white pt-20 md:pt-32">
            <h1 className="text-3xl md:text-6xl font-bold mb-4">Batari Solar-P</h1>
            <p className="text-base md:text-xl">
              A solar panel, a cornerstone of renewable energy technology, presents a multitude of advantages beyond its primary function of converting sunlight into electricity
            </p>
          </div>
          
          {/* Right Side Image - Adjusted position */}
          <div className="block absolute right-4 top-1/2 w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
            <Image
              src="/images/product/solar-p/solar-p (1).png"
              alt="Solar Panel Product"
              fill
              className="object-contain scale-150 origin-top"
              priority
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-16">
        {/* Product Image Section */}
        <div className="relative rounded-3xl overflow-hidden mb-8 md:mb-16 flex justify-center">
          <Image
            src="/images/product/solar-p/solar-p (2).jpeg"
            alt="Solar Panel Installation"
            width={1200}
            height={600}
            className="w-full md:w-1/2 object-cover rounded-3xl"
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 bg-white">
          {/* Solar Panel */}
          <div className="bg-[#F8F9F4] rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-black">Solar Panel</h2>
            <p className="text-sm md:text-base text-gray-600">
              Panel fotovoltaik (PV) mengubah sinar matahari menjadi listrik dan merupakan komponen penting dalam sistem tenaga surya, yang memanfaatkan energi terbarukan dari matahari.
            </p>
          </div>

          {/* Mounting Clamp and Fit */}
          <div className="bg-[#F8F9F4] rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-black">Mounting Clamp and Fit</h2>
            <p className="text-sm md:text-base text-gray-600">
              Klem pemasangan dan L-fit penting untuk instalasi panel surya yang aman. Klem pemasangan mengikat panel ke struktur, sementara L-fit memberikan dukungan tambahan dan memungkinkan penyesuaian sudut kemiringan untuk meningkatkan penangkapan energi surya.
            </p>
          </div>

          {/* Connector MC4 and Cable */}
          <div className="bg-[#F8F9F4] rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-black">Connector MC4 and Cable</h2>
            <p className="text-sm md:text-base text-gray-600">
              Baut digunakan untuk mengikat panel surya dengan aman ke struktur pemasangan, memastikan koneksi yang stabil agar panel tetap pada tempatnya, bahkan dalam cuaca yang ekstrem.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolarPPage 