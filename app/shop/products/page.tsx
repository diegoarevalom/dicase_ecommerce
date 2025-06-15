"use client";

import ProductList from '@/src/components/product/productList'
import Link from 'next/link';
import React, {useState} from 'react'

function Products() {

    const [price, setPrice] = useState(200000); // Precio máximo por defecto
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const [filteredCount, setFilteredCount] = useState(0);

    const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };


  return (
    <div className="px-6 py-6 space-y-6">
      <div className="text-left text-sm text-black px-5"> <Link className='font-bold' href="/">Inicio</Link> {'>'} <Link href="/shop/products">Catálogo</Link></div>

      {/* Layout con filtros y productos */}
      <div className="flex gap-6 items-start">
        {/* Sidebar de filtros */}
        <aside className="w-1/5 p-4 rounded-lg shadow-md hidden lg:block">
          <h2 className="text-lg font-bold mb-1 text-center">Ordenar Por:</h2>
          <hr className="my-2 border-t-3 border-[#C1BAB6]" />
          <h2 className="text-sm font-semibold mb-3">Tipo de Producto</h2>
          <div className="space-y-2 text-sm">
            <div><input type="checkbox" onChange={() => handleTypeChange("Polvo")} checked={selectedTypes.includes("Polvo")}/> Polvo</div>
            <div><input type="checkbox" onChange={() => handleTypeChange("Tabletas_Capsulas")} checked={selectedTypes.includes("Tabletas_Capsulas")}/> Tabletas y Cápsulas</div>
            <div><input type="checkbox" onChange={() => handleTypeChange("Bebida")} checked={selectedTypes.includes("Bebida")}/> Bebidas</div>
            <div><input type="checkbox" onChange={() => handleTypeChange("Otros")} checked={selectedTypes.includes("Otros")}/> Otros</div>
          </div>
          <hr className="my-2 border-t-3 border-[#C1BAB6]" />
          <h2 className="text-sm font-semibold mb-3">Categorías</h2>
          <div className="space-y-2 text-sm">
            <div><input type="checkbox" onChange={() => handleCategoryChange("Proteína")} checked={selectedCategories.includes("Proteína")}/> Proteína</div>
            <div><input type="checkbox" onChange={() => handleCategoryChange("Vitamina")} checked={selectedCategories.includes("Vitamina")}/> Vitamina</div>
            <div><input type="checkbox" onChange={() => handleCategoryChange("Creatina")} checked={selectedCategories.includes("Creatina")}/> Creatina</div>
            <div><input type="checkbox" onChange={() => handleCategoryChange("Pre Entreno")} checked={selectedCategories.includes("Pre Entreno")}/> Pre Entreno</div>
            <div><input type="checkbox" onChange={() => handleCategoryChange("Snack")} checked={selectedCategories.includes("Snack")}/> Snack</div>
            <div><input type="checkbox" onChange={() => handleCategoryChange("Accesorio")} checked={selectedCategories.includes("Accesorio")}/> Accesorio</div>
          </div>
          <hr className="my-2 border-t-3 border-[#C1BAB6]" />
          <div className="mb-6">
            <label htmlFor="priceRange" className="block mb-3 text-sm font-semibold">
              Precio máximo: ${price}
            </label>
            <input id="priceRange" type="range" min="0" max="200000" step="1000" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full h-0.5 bg-gray-400 rounded-lg appearance-none cursor-pointer accent-black"/>
          </div>
        </aside>
        
        {/* Lista de productos */}
        <main className="w-full">
          <h1 className="text-3xl font-bold mb-2">Catálogo</h1>
          <hr className="my-3 border-t-3 border-[#C1BAB6]" />
          <h2 className="text-lg mb-3">({filteredCount}) Productos</h2>
          <ProductList
            maxPrice={price}
            selectedTypes={selectedTypes}
            selectedCategories={selectedCategories}
            onFilteredCountChange={setFilteredCount}
          />
        </main>
      </div>
    </div>
  )
}

export default Products;