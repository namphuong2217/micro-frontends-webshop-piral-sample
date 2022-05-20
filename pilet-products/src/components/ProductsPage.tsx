import * as React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { History } from "history";
import { ProductCard } from "./ProductCard";

export interface ProductsPageProps {
  history: History;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ history }) => {
  return (
    <>
      <div className="products-page">
        <div id="landing-introduction">
          <h1 id="store">The Wild Orchard Store</h1>
          <h5>
            The green tea trees on our Jeju Island partner farm are lush and
            hardy, often adorned with spiders and other beautiful insects
            thriving alongside the rich wildlife native to the island—a clear
            indication that our green tea has been raised with absolutely no
            chemicals, pesticides or artificial inputs.
          </h5>
        </div>
        <div id="landing-products-list">
          <div className="cards">
            {products.map((product) => (
              <div className="card" key={product.id}>
                <div className="container">
                  <img src={product.image} alt={product.name} />
                  <h4>
                    <b>{product.name}</b>
                  </h4>
                  <p>{product.description}</p>
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => history.push(`/products/${product.id}`)}
                  >
                    Purchase Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <Link to={`/products/${product.id}`}>My Page</Link> */
}

{
  /* {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                image={product.image}
                buyButton={undefined}
                // buyButton={<BuyButton item={product}></BuyButton>}
              />
            );
          })} */
}
