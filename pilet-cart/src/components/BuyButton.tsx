import * as React from "react";

export interface BuyButtonProps {
  product: {
    id: string;
    name: string;
    image: any;
    price: number;
    category: string;
    description: string;
  };
  addToCart(product: Object): void;
}

export const BuyButton: React.FC<BuyButtonProps> = ({ product, addToCart }) => (
  <div className="blue-buy" id="buy">
    <button type="button" onClick={() => addToCart(product)}>
      buy for {product.price}
    </button>
  </div>
);
