import * as React from "react";

interface Product {
  id: string;
  name: string;
  price: Number;
  image: string;
}

interface CartPageProps {
  cart: Array<Product>;
}

export const CartPage: React.FC<CartPageProps> = ({ cart }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md">
          <h3>Cart</h3>
        </div>
        <div className="col-md">
          <h3>{cart.length} Item</h3>
        </div>
      </div>
      <hr />
      {cart.map((product) => {
        return (
          <div className="row">
            <div className="col-md-4">
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "300px" }}
              />
            </div>
            <div className="col-md-3">{product.name}</div>
            <div className="col-md-3">{product.price}</div>
          </div>
        );
      })}
    </div>
  );
};
