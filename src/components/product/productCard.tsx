import React from "react";
import Link from "next/link";
import { Product } from "../../types/product";

type ProductCardProps = Product;

const ProductCard = ({ id, name, image, price, slug, servings, onSale, discount }: ProductCardProps) => {

    // Calcular precio con descuento si aplica
    const finalPrice = onSale && discount ? price * (1 - discount) : price;
    const discountPercentage = discount ? Math.round(discount * 100) : 0;

    return (
      <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition p-4 bg-white flex flex-col h-full">
        <Link href={`/shop/products/${slug}`}>
          <div className="relative w-full h-40 mb-4">
            <img src={image} alt={name} className="w-full h-40 object-contain rounded mb-4" />

            {onSale && discount && (
              <div className="absolute top-1 left-1 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                -{discountPercentage}%
              </div>
            )}
          </div>

          <h3 className="text-lg font-bold text-gray-800 line-clamp-2 min-h-[3rem]">{name}</h3>
          <p className="text-gray-600 mt-1">{servings} servicios</p>

          {onSale && discount ? (
            <div className="text-red-600 font-semibold mt-1">
              <span className="line-through text-gray-500 mr-2">${price.toLocaleString('es-CL')}</span>
              <span>${finalPrice.toLocaleString('es-CL')}</span>
            </div>
          ) : (
            <p className="text-lg font-bold text-gray-900 mt-1">${price.toLocaleString('es-CL')}</p>
          )}
        </Link>
      </div>
    );
}

export default ProductCard;