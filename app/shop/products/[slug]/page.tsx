import { products } from "@/src/data/products";
import { notFound } from "next/navigation";
import ProductDetails from "@/src/components/product/productDetails";

type Props = {
  params: { slug: string };
};

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
}
