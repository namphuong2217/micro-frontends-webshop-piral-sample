import * as React from "react";
import { PiletApi } from "app-shell";
import { BuyButton } from "./components/BuyButton";

interface BuyButtonExtension {
  product: any;
}

export function setup(app: PiletApi) {
  app.setData("cart-data", []);

  const addToCart = (item) => {
    var cart = app.getData("cart-data");
    cart.push(item);
    app.setData("cart-data", cart);
    console.log("Cart: ", cart.length);
  };

  app.registerExtension<BuyButtonExtension>("buy-button", ({ params }) => (
    <BuyButton addToCart={addToCart} product={params.product} />
  ));
}
