import React from "react";
import Link from "next/link";
import { Product } from "../../types/product";

type ProductCardProps = Product;

const ProductCard = ({ id, name, image, price, slug, servings }: ProductCardProps) => {

    return (
        <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition p-4 bg-white flex flex-col h-full">
        <Link href={`/shop/products/${slug}`}>
        <img src={image} alt={name} className="w-full h-40 object-contain rounded mb-4" />
        <h3 className="text-lg font-bold text-gray-800 line-clamp-2 min-h-[3rem]">{name}</h3>
        <p className="text-lg font-bold text-gray-900 mt-1">${price.toLocaleString()}</p>
        <p className="text-gray-600 mt-1">{servings} servicios</p>
      </Link>
    </div>
    );
}

export default ProductCard;