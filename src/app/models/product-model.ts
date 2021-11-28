export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export interface ProductInShop extends Product {
  quantity: number;
  priceAfterSummary: number;
  hide: boolean;
  orderNumber: number;
}
export enum ProductCategory {
  MENS_CATEGORY = "men's clothing",
  WOMENS_CATEGORY = "women's clothing",
  FASHION_CATEGORY = 'fashion',
}
