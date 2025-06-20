"use client";
import React from 'react';
import Link from 'next/link';
import ProductList from '@/src/components/product/productList';

function Offers() {

  return (
    <div className="py-6 space-y-6">
      <div className="text-left text-sm text-black px-5"> <Link className='font-bold' href="/">Inicio</Link> {'>'} <Link href="/shop/offers">Ofertas</Link></div>
        
        <div className="mt-10 w-full h-120 mx-auto">
            <img src="/images/banner-offers.jpg" alt="Banner snack" className="w-full h-full object-contain" />
        </div>

        <div className="ml-45 mr-45 px-6 py-8">
            <ProductList
                selectedTypes={[]}               
                selectedCategories={[]} 
                maxPrice={Infinity}
                onlyOnSale={true}
            />
        </div>

        <div className="flex flex-row w-full h-90 mt-20 bg-[#A59C96] text-center">
            <img src="/images/offers-image1.jpg" alt="Imagen Oferta" className="w-1/4 h-full object-cover" />
            <div>
                <p className="text-4xl font-bold py-5 mt-15 ml-40 mr-40">Productos seleccionados con hasta un 30% de descuento</p>
                <p className="text-2xl py-5 ml-40 mr-40 mt-3">¡Aprovecha estas ofertas por tiempo limitado! Descubre nuestra selección especial de proteínas con precios rebajados.</p>
            </div>
        </div>

        <div className="ml-45 mr-45 px-6 py-8">
            <ProductList
                selectedTypes={[]}               
                selectedCategories={["Proteína"]} 
                maxPrice={Infinity}   
                onlyOnSale={true}           
            />
        </div>

        <div className="w-180 h-80 mt-40 bg-[#C1BCB9] text-center mx-auto">
            <p className="text-4xl font-bold py-5">¡Aprovecha nuestras ofertas exclusivas!</p>
            <p className="text-2xl py-5 ml-30 mr-30 mt-3">Utiliza nuestro codigo: <strong>DICASE2025</strong> y obten un 10% de descuento en el total de tu compra.</p>
            <p className="text-2xl py-5 ml-30 mr-30">Válido hasta el 26/08/2025</p>
        </div>

    </div>
  )
}

export default Offers;