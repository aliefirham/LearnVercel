import { useState } from 'react';
import { ProductType } from '@/types/product';

const dummyProducts: ProductType[] = [
  {
    id: '1',
    title: 'Panel Surya On Grid',
    price: '15.000.000',
    description: 'Panel surya untuk sistem on grid',
    image: '/images/product/on-grid.png',
    category: 'Panelsurya',
    isNew: true
  },
  {
    id: '2',
    title: 'Panel Surya Off Grid',
    price: '20.000.000',
    description: 'Panel surya untuk sistem off grid',
    image: '/images/product/off-grid.png',
    category: 'Panelsurya',
    isNew: true
  },
  {
    id: '3',
    title: 'Panel Surya Hybrid',
    price: '25.000.000',
    description: 'Panel surya untuk sistem hybrid',
    image: '/images/product/hybrid.png',
    category: 'Panelsurya',
    isNew: false
  },
  {
    id: '4',
    title: 'Baterai Penyimpanan Energi',
    price: '10.000.000',
    description: 'Baterai untuk menyimpan energi dari panel surya',
    image: '/images/product/battery.jpg',
    category: 'Panelsurya',
    isNew: true
  }
];

export function useMenu() {
  const [products] = useState<ProductType[]>(dummyProducts);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  return {
    products,
    loading,
    error,
    isMenuExpanded: false
  };
} 