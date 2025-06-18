"use client";

import { Product } from "@/src/types/product";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  product: Product;
};

export default function ProductDetails({ product }: Props) {

    const images = [product.image, ...(product.images ?? [])];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Para limitar las miniaturas mostradas
    const getVisibleThumbnails = () => {
        const maxThumbs = 4;
        const total = images.length;

        let start = currentIndex - Math.floor(maxThumbs / 2);
        if (start < 0) start = 0;
        if (start > total - maxThumbs) start = total - maxThumbs;

        return images.slice(start, start + maxThumbs).map((img, i) => ({
            img,
            realIndex: start + i,
        }));
    };

    const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    const [showDescription, setShowDescription] = useState(false);
    const [showBenefits, setShowBenefits] = useState(false);
    const [showUsage, setShowUsage] = useState(false);

    const [quantity, setQuantity] = useState(1);
    const decrease = () => setQuantity((q) => Math.max(1, q - 1));
    const increase = () => setQuantity((q) => q + 1)

  return (
    <div className="px-6 py-6 space-y-6">
        
      <div className="text-left text-sm text-black px-5"> <Link className='font-bold' href="/">Inicio</Link> {'>'} <Link className="font-bold" href="/shop/products">Catálogo</Link> {'>'} <span>{product.name}</span></div>

      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row gap-10 ml-5 mt-25">
        {/* Miniaturas + Imagen principal */}
        <div className="flex md:w-2/5 gap-4 ml-30">
          {/* Miniaturas */}
          <div className="flex flex-col gap-2 h-[400px] justify-between">
            {getVisibleThumbnails().map(({ img, realIndex }, i) => (
                <Image key={`${img}-${realIndex}`} src={img} alt={`Miniatura ${realIndex + 1}`} width={100} height={100} className={`cursor-pointer border rounded-lg object-contain ${realIndex === currentIndex ? "border-black" : "border-gray-300"}`} onClick={() => setCurrentIndex(realIndex)} />
            ))}
          </div>
          
          <div className="flex flex-col items-center w-full">

            {/* Imagen principal con flechas */}
            <div className="relative w-full flex justify-center items-center h-[400px]">
            <Image src={images[currentIndex]} alt={product.name} width={400} height={400} className="object-contain rounded-lg bg-white w-full h-130"/>
            {/* Flechas */}
            {images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow hover:bg-gray-200">
                  ←
                </button>
                <button onClick={nextImage} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow hover:bg-gray-200">
                  →
                </button>
              </>
            )}
          </div>

        {/* Descripción general */}
        <div className="w-full flex flex-col items-center text-center mt-20 mb-3">
          <hr className="w-full my-1 border-t-2 border-[#C1BAB6]" />
          <button onClick={() => setShowDescription((prev) => !prev)} className="flex items-center justify-between gap-2 text-lg font-semibold text-black">
            Descripción general del producto
            <span className="text-base">{showDescription ? "^" : "˅"}</span>
          </button>
          {showDescription && (
            <p className="mt-2 text-sm text-gray-700 text-justify max-w-xl">{product.description}</p>
          )}
        </div>

          {/* Beneficios */}
        <div className="w-full flex flex-col items-center text-center mb-3">
          <hr className="w-full my-1 border-t-2 border-[#C1BAB6]" />
          <button onClick={() => setShowBenefits((prev) => !prev)} className="flex items-center justify-between gap-2 text-lg font-semibold text-black">
            Beneficios del producto
            <span className="text-base">{showBenefits ? "^" : "˅"}</span>
          </button>
          {showBenefits && (
            <p className="mt-2 text-sm text-gray-700 text-justify max-w-xl">{product.benefits}</p>
          )}
        </div>

        {/* Recomendacion de uso */}
        <div className="w-full flex flex-col items-center text-center mb-3">
          <hr className="w-full my-1 border-t-2 border-[#C1BAB6]" />
          <button onClick={() => setShowUsage((prev) => !prev)} className="flex items-center justify-between gap-2 text-lg font-semibold text-black">
            Recomendación de uso
            <span className="text-base">{showUsage ? "^" : "˅"}</span>
          </button>
          {showUsage && (
            <p className="mt-2 text-sm text-gray-700 text-justify max-w-xl">{product.recommendedUse}</p>
          )}
        </div>

      </div>

      </div>

          {/* Detalles */}
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <ul className="list-disc list-inside text-sm space-y-1">
              {product.info.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm">Porciones: {product.servings}</p>

            <label className="block text-sm font-medium text-gray-700 mb-1">SABOR</label>
            <select className="bg-white rounded-lg px-2 py-1.5 w-full max-w-xs" defaultValue="">
              <option value="" disabled>
                Elige tu sabor
              </option>
              {product.flavours.map((flavour, idx) => (
                <option key={idx} value={flavour}>
                  {flavour}
                </option>
              ))}
            </select>

            <p className="text-2xl font-semibold text-black">Precio: ${product.price.toLocaleString()}</p>

            <div className="flex items-center gap-4 mt-4">
                {/* Controles cantidad */}
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                <button onClick={decrease} className="px-3 py-1 hover:bg-gray-300 text-lg font-bold bg-white border border-gray-200">
                  –
                </button>
                <div className="w-12 text-center text-lg font-medium">{quantity}</div>
                <button onClick={increase} className="px-3 py-1  hover:bg-gray-300 text-lg font-bold bg-white border border-gray-200">
                  +
                </button>
              </div>
              {/* Subtotal */}
              <p className="text-lg font-semibold ml-1">
                Subtotal: ${ (product.price * quantity).toLocaleString() }
              </p>
            </div>
            

            <button className="mt-1 px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition">
              Añadir al carrito
            </button>
          </div>
      </div>

    </div>
  );
}
