import ProductCard from "./productCard";
import { useEffect } from "react";
import {products as mockProducts} from "../../data/products";

type Props = {
  selectedTypes: string[];
  selectedCategories: string[];
  maxPrice: number;
  onFilteredCountChange?: (count: number) => void;
};

export default function ProductList({ selectedTypes, selectedCategories, maxPrice, onFilteredCountChange }: Props) {


  //Para agrupar el tipo de Tabletas y Capsulas
  const resolveTypes = (types: string[]) => {
    const mapped: string[] = [];
      types.forEach((type) => {
        if (type === "Tabletas_Capsulas") {
          mapped.push("Tabletas", "Capsulas");
        } else {
          mapped.push(type);
        }
    });
    return mapped;
  };

  const realTypes = resolveTypes(selectedTypes);

  const filteredProducts = mockProducts.filter((product) =>
    (realTypes.length === 0 || realTypes.includes(product.type ?? "")) &&
    (selectedCategories.length === 0 || selectedCategories.includes(product.category ?? "")) &&
    product.price <= maxPrice
  );

  useEffect(() => {
    onFilteredCountChange?.(filteredProducts.length);
  }, [filteredProducts.length, onFilteredCountChange]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
