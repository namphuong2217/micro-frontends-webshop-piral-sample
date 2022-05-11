import * as React from "react";
import { History } from "history";

import { products } from "../data/products";
import { productsUniqueCategories } from "../data/productsUniqueCategories";

export interface ProductDetailsPageProps {
  id: string;
  history: History;
  BuyButton: React.ComponentType<{
    product: any;
  }>;
  Recommendations: React.ComponentType<{
    category: string;
  }>;
  // BasketInfo: React.ComponentType;
}

export const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({
  id,
  history,
  BuyButton,
  Recommendations,
}) => {
  const [currentDisplayedProduct] = products.filter(
    (product) => id === product.id
  );

  return (
    currentDisplayedProduct && (
      <>
        <div id="webhop-main">
          <h1 id="store">Wild Orchard Store</h1>
          <h2 id="name"> </h2>
          <p id="description">
            <h2 id="name">{currentDisplayedProduct.name} </h2>
            {currentDisplayedProduct.description}
          </p>
          {/* <BasketInfo /> */}
          <div id="imageMain">
            <div>
              <img
                src={currentDisplayedProduct.image}
                alt={currentDisplayedProduct.name}
              />
            </div>
          </div>
          <BuyButton product={currentDisplayedProduct} />

          <div id="options">
            <h2>Other Categories</h2>
            <br></br>
            {productsUniqueCategories
              .filter(
                (product) =>
                  product.category !== currentDisplayedProduct.category
              )
              .map((product) => (
                <button
                  key={product.id}
                  className={id === product.id ? "active" : ""}
                  type="button"
                  onClick={() => history.push(`/products/${product.id}`)}
                >
                  <img src={product.image} alt={product.name} />
                </button>
              ))}
          </div>
          <Recommendations category={currentDisplayedProduct.category} />
        </div>
      </>
    )
  );
};
