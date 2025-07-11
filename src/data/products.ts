// Centralized product data for the app
import type { StockStatus } from "../components/ProductCard/SingleProductCard";

export interface ProductData {
  productImage: string;
  productName: string;
  salePrice?: string;
  originalPrice: string;
  saleLabel?: string;
  shippingLabel: string;
  stockStatus: StockStatus;
  brand: string;
  flavor: string;
  strength: string;
  nicotinePerPouch: string;
  description?: string;
  howToUse?: string;
}

export const products: ProductData[] = [
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
    brand: "Klint",
    flavor: "Arctic Mint",
    strength: "Medium",
    nicotinePerPouch: "6 mg",
    description: "A refreshing mint flavor with a cool sensation. Perfect for those who want a clean, crisp taste.",
    howToUse: "Open the can, take a pouch, and place it between your gum and upper lip. Enjoy for up to 30 minutes.",
  },
  {
    productImage: "/product-image.png",
    productName: "Velo Ice Cool",
    originalPrice: "€ 4,99",
    shippingLabel: "Free shipping",
    stockStatus: "low_stock",
    brand: "Velo",
    flavor: "Ice Cool",
    strength: "Strong",
    nicotinePerPouch: "10 mg",
    description: "Intense cooling effect with a strong nicotine kick. For experienced users.",
    howToUse: "Place one pouch under your lip. Do not chew or swallow. Dispose after use.",
  },
  {
    productImage: "/product-image.png",
    productName: "Loop Jalapeno Lime",
    salePrice: "€ 3,99",
    originalPrice: "€ 5,49",
    saleLabel: "Sale 20%",
    shippingLabel: "Free shipping",
    stockStatus: "last_3",
    brand: "Loop",
    flavor: "Jalapeno Lime",
    strength: "Medium",
    nicotinePerPouch: "8 mg",
    description: "A spicy and tangy blend for adventurous taste buds.",
    howToUse: "Insert a pouch between your gum and lip. Enjoy the flavor and sensation.",
  },
  {
    productImage: "/product-image.png",
    productName: "Zyn Citrus Mini",
    originalPrice: "€ 4,49",
    shippingLabel: "Free shipping",
    stockStatus: "no_stock",
    brand: "Zyn",
    flavor: "Citrus Mini",
    strength: "Light",
    nicotinePerPouch: "3 mg",
    description: "Bright citrus notes in a mini format. Great for beginners.",
    howToUse: "Place a mini pouch under your lip. Remove after use.",
  },


  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
    brand: "Klint",
    flavor: "Arctic Mint",
    strength: "Medium",
    nicotinePerPouch: "6 mg",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
    brand: "Klint",
    flavor: "Arctic Mint",
    strength: "Medium",
    nicotinePerPouch: "6 mg",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "low_stock",
    brand: "Klint",
    flavor: "Arctic Mint",
    strength: "Medium",
    nicotinePerPouch: "6 mg",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
    brand: "Klint",
    flavor: "Arctic Mint",
    strength: "Medium",
    nicotinePerPouch: "6 mg",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "low_stock",
    brand: "Klint",
    flavor: "Arctic Mint",
    strength: "Medium",
    nicotinePerPouch: "6 mg",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "no_stock",
    brand: "Klint",
    flavor: "Arctic Mint",
    strength: "Medium",
    nicotinePerPouch: "6 mg",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "last_3",
    brand: "Klint",
    flavor: "Arctic Mint",
    strength: "Medium",
    nicotinePerPouch: "6 mg",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "last_3",
    brand: "Klint",
    flavor: "Arctic Mint",
    strength: "Medium",
    nicotinePerPouch: "6 mg",
  },
  
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "no_stock",
    brand: "Klint",
    flavor: "Arctic Mint",
    strength: "Medium",
    nicotinePerPouch: "6 mg",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "no_stock",
    brand: "Klint",
    flavor: "Arctic Mint",
    strength: "Medium",
    nicotinePerPouch: "6 mg",
  },
  
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "low_stock",
    brand: "Klint",
    flavor: "Arctic Mint",
    strength: "Medium",
    nicotinePerPouch: "6 mg",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "low_stock",
    brand: "Klint",
    flavor: "Arctic Mint",
    strength: "Medium",
    nicotinePerPouch: "6 mg",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "last_3",
    brand: "Klint",
    flavor: "Arctic Mint",
    strength: "Medium",
    nicotinePerPouch: "6 mg",
  },
  
];
