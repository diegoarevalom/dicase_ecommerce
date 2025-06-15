import ProductCard from "./productCard";
import { useEffect } from "react";

const mockProducts = [
  {
    id: "1",
    type: "Polvo",
    category: "Proteína",
    image: "/images/imagen-ejemplo.jpg",
    name: "Redcon1, Ration Whey Protein",
    servings: 65,
    price: 49990,
    slug: "protein-ration-whey",
  },
  {
    id: "2",
    type: "Polvo",
    category: "Creatina",
    image: "/images/imagen-ejemplo.jpg",
    name: "Creatina RAW Monohydrato",
    servings: 30,
    price: 27990,
    slug: "creatina-raw",
  },
  {
    id: "3",
    type: "Tabletas",
    category: "Vitamina",
    image: "/images/imagen-ejemplo.jpg",
    name: "Producto de Ejemplo 2",
    servings: 30,
    price: 27990,
    slug: "producto-2",
  },
  {
    id: "4",
    type: "Capsulas",
    category: "Vitamina",
    image: "/images/imagen-ejemplo.jpg",
    name: "Producto de Ejemplo 3",
    servings: 30,
    price: 27990,
    slug: "producto-3",
  },
  {
    id: "5",
    type: "Bebida",
    category: "Pre Entreno",
    image: "/images/imagen-ejemplo.jpg",
    name: "Producto de Ejemplo 4",
    servings: 30,
    price: 27990,
    slug: "producto-4",
  },
  {
    id: "6",
    type: "Otros",
    category: "Snack",
    image: "/images/imagen-ejemplo.jpg",
    name: "Producto de Ejemplo 5",
    servings: 30,
    price: 27990,
    slug: "producto-5",
  },
  {
    id: "7",
    type: "Otros",
    category: "Accesorio",
    image: "/images/imagen-ejemplo.jpg",
    name: "Producto de Ejemplo 6",
    servings: 30,
    price: 27990,
    slug: "producto-6",
  },
];

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
