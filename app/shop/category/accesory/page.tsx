"use client";
import React from 'react';
import Link from 'next/link';
import ProductList from '@/src/components/product/productList';

function Accesory() {

  return (
    <div className="py-6 space-y-6">
      <div className="text-left text-sm text-black px-5"> <Link className='font-bold' href="/">Inicio</Link> {'>'} <Link href="/shop/category/accesory">Accesorios</Link></div>
        
        <div className='mt-10 w-full h-120'>
            <img src="/images/banner-accesory.jpg" alt="Banner accesory" className="w-full h-full object-cover" />
        </div>

        <div className="w-full h-80 mt-20 bg-[#C1BCB9] text-center">
            <p className="text-4xl font-bold py-5">Accesorios que complementan tu rendimiento</p>
            <p className="text-2xl py-5 ml-30 mr-30 mt-3">Encuentra todo lo que necesitas para mejorar tu entrenamiento: desde shakers y bandas de resistencia, hasta guantes, botellas y más.</p>
            <p className="text-2xl py-5 ml-30 mr-30">Optimiza tu rutina con los mejores complementos deportivos.</p>

        </div>

        <div className="ml-30 mr-30 px-6 py-8">
            <ProductList
                selectedTypes={[]}               
                selectedCategories={["Accesorio"]} 
                maxPrice={Infinity}              
            />
        </div>
    </div>
  )
}

export default Accesory;