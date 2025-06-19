"use client";
import React from 'react';
import Link from 'next/link';
import ProductList from '@/src/components/product/productList';

function PreWorkout() {

  return (
    <div className="py-6 space-y-6">
      <div className="text-left text-sm text-black px-5"> <Link className='font-bold' href="/">Inicio</Link> {'>'} <Link href="/shop/category/preWorkout">Pre Entrenos</Link></div>
        <h1 className="text-3xl font-bold text-center">¿Para qué son los pre entrenos?</h1>

        <div className="flex flex-wrap justify-center gap-8 mt-10">
            {/* Imagen 1 */}
            <div className="flex flex-col items-center w-40">
                <img src="/images/preworkout-icon1.jpg" alt="Icono 1" className="w-24 h-24 object-contain rounded-full" />
                <p className="mt-2 text-sm text-center text-gray-700">Aumentan la energía y el enfoque antes de entrenar</p>
            </div>

            {/* Imagen 2 */}
            <div className="flex flex-col items-center w-40">
                <img src="/images/preworkout-icon2.jpg" alt="Icono 2" className="w-24 h-24 object-cover rounded-full" />
                <p className="mt-2 text-sm text-center text-gray-700">Mejoran el rendimiento y la resistencia</p>
            </div>

            {/* Imagen 3 */}
            <div className="flex flex-col items-center w-40">
                <img src="/images/preworkout-icon3.jpg" alt="Icono 3" className="w-24 h-24 object-cover rounded-full" />
                <p className="mt-2 text-sm text-center text-gray-700">Estimulan la concentración y la motivación</p>
            </div>
        </div>

        <div className='mt-10 w-full h-80'>
            <img src="/images/banner-preworkout.jpg" alt="Banner Pre Entreno" className="w-full h-full object-contain" />
        </div>

        <div className="ml-30 mr-30 px-6 py-8">
            <ProductList
                selectedTypes={[]}               
                selectedCategories={["Pre Entreno"]} 
                maxPrice={Infinity}              
            />
        </div>
    </div>
  )
}

export default PreWorkout;