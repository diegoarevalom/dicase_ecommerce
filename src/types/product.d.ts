export type Product = {
  id: string;
  type: string;
  category: string;
  image: string;
  images?: string[];
  name: string;
  info: string[];
  description: string;
  benefits: string,
  recommendedUse: string;
  servings: number;
  flavours: string[];
  price: number;
  onSale: boolean;
  discount: number;
  slug: string;
};