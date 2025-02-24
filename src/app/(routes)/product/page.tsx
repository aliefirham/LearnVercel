'use client'

import Hero from './components/hero'
import Products from './components/products'
import Installation from './components/installation'
import Advantages from './components/advantages'

const ProductPage = () => {
    return (
        <main className="bg-white">
            <Hero />
            <Products />
            <Installation />
            <Advantages />
        </main>
    )
}

export default ProductPage 