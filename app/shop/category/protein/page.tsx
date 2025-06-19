"use client";
import React from 'react';
import Link from 'next/link';
import ProductList from '@/src/components/product/productList';

function Protein() {

  return (
    <div className="py-6 space-y-6">
      <div className="text-left text-sm text-black px-5"> <Link className='font-bold' href="/">Inicio</Link> {'>'} <Link href="/shop/category/protein">Proteínas</Link></div>
        <h1 className="text-3xl font-bold text-center">¿Para qué son las proteínas?</h1>

        <div className="flex flex-wrap justify-center gap-8 mt-10">
            {/* Imagen 1 */}
            <div className="flex flex-col items-center w-40">
                <img src="/images/protein-icon1.jpg" alt="Icono 1" className="w-24 h-24 object-contain rounded-full" />
                <p className="mt-2 text-sm text-center text-gray-700">Favorecen el desarrollo y mantenimiento muscular</p>
            </div>

            {/* Imagen 2 */}
            <div className="flex flex-col items-center w-40">
                <img src="/images/protein-icon2.jpg" alt="Icono 2" className="w-24 h-24 object-cover rounded-full" />
                <p className="mt-2 text-sm text-center text-gray-700">Aceleran la recuperación post-entrenamiento</p>
            </div>

            {/* Imagen 3 */}
            <div className="flex flex-col items-center w-40">
                <img src="/images/protein-icon3.jpg" alt="Icono 3" className="w-24 h-24 object-cover rounded-full" />
                <p className="mt-2 text-sm text-center text-gray-700">Contribuyen a una nutrición balanceada y efectiva</p>
            </div>
        </div>

        <div className='mt-10 w-full h-80'>
            <img src="/images/banner-protein.jpg" alt="Banner Protein" className="w-full h-full object-contain" />
        </div>

        <div className="ml-30 mr-30 px-6 py-8">
            <ProductList
                selectedTypes={[]}               // No filtra por tipo
                selectedCategories={["Proteína"]} // Solo muestra productos de categoria proteina
                maxPrice={Infinity}              // No filtra por precio
            />
        </div>
    </div>
  )
}

export default Protein;