"use client";
import React from 'react';
import Link from 'next/link';
import ProductList from '@/src/components/product/productList';

function Snack() {

  return (
    <div className="py-6 space-y-6">
      <div className="text-left text-sm text-black px-5"> <Link className='font-bold' href="/">Inicio</Link> {'>'} <Link href="/shop/category/snack">Snacks</Link></div>
        
        <div className='mt-10 w-full h-120'>
            <img src="/images/banner-snack.jpg" alt="Banner snack" className="w-full h-full object-cover" />
        </div>

        <div className="w-full h-80 mt-20 bg-[#C1BCB9] text-center">
            <p className="text-4xl font-bold py-5">Snacks fitness para nutrirte en cualquier momento</p>
            <p className="text-2xl py-5 ml-30 mr-30 mt-3">Disfruta de opciones saludables, prácticas y sabrosas para mantener tu energía entre comidas o después del entrenamiento.</p>
            <p className="text-2xl py-5 ml-30 mr-30">Barras proteicas, comida saludable y otros complementos, pensados para apoyar tu estilo de vida activo.</p>
        </div>

        <div className="ml-30 mr-30 px-6 py-8">
            <ProductList
                selectedTypes={[]}               
                selectedCategories={["Snack"]} 
                maxPrice={Infinity}              
            />
        </div>
    </div>
  )
}

export default Snack;