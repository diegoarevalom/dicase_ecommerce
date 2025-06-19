"use client";
import React from 'react';
import Link from 'next/link';
import ProductList from '@/src/components/product/productList';

function Vitamin() {

  return (
    <div className="py-6 space-y-6">
      <div className="text-left text-sm text-black px-5"> <Link className='font-bold' href="/">Inicio</Link> {'>'} <Link href="/shop/category/vitamin">Vitaminas</Link></div>
        <h1 className="text-3xl font-bold text-center">¿Para qué son las vitaminas?</h1>

        <div className="flex flex-wrap justify-center gap-8 mt-10">
            {/* Imagen 1 */}
            <div className="flex flex-col items-center w-40">
                <img src="/images/protein-icon1.jpg" alt="Icono 1" className="w-24 h-24 object-contain rounded-full" />
                <p className="mt-2 text-sm text-center text-gray-700">Favorecen la recuperación muscular</p>
            </div>

            {/* Imagen 2 */}
            <div className="flex flex-col items-center w-40">
                <img src="/images/vitamin-icon2.jpg" alt="Icono 2" className="w-24 h-24 object-cover rounded-full" />
                <p className="mt-2 text-sm text-center text-gray-700"> Contribuyen al rendimiento físico y mental</p>
            </div>

            {/* Imagen 3 */}
            <div className="flex flex-col items-center w-40">
                <img src="/images/vitamin-icon3.jpg" alt="Icono 3" className="w-24 h-24 object-cover rounded-full" />
                <p className="mt-2 text-sm text-center text-gray-700">Refuerzan el sistema inmune durante entrenamientos intensos</p>
            </div>
        </div>

        <div className='mt-10 w-full h-80'>
            <img src="/images/banner-vitamin.jpg" alt="Banner Vitamin" className="w-full h-full object-contain" />
        </div>

        <div className="ml-30 mr-30 px-6 py-8">
            <ProductList
                selectedTypes={[]}               
                selectedCategories={["Vitamina"]} 
                maxPrice={Infinity}              
            />
        </div>
    </div>
  )
}

export default Vitamin;