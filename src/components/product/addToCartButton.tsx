'use client';
import { useState } from 'react';

interface AddToCartButtonProps {
  productId: string;
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    //lógica real del carrito (Pendiente)
    console.log(`Producto agregado al carrito: ${productId}`);
    setAdded(true);

    // Opcional: volver a false después de unos segundos
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
    >
      {added ? 'Agregado ✅' : 'Agregar al carrito'}
    </button>
  );
}
