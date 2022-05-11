import * as React from "react";
import { Link } from "react-router-dom";
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

  // Cart event
  app.registerMenu("cart-menu", () => {
    var cartSnapshot = app.getData("cart-data").length;
    return cartSnapshot && <Link to="/cart">Cart - {cartSnapshot} </Link>;
  });

  app.on("store-data", ({ name }) => {
    if (name === "cart-data") {
      app.registerMenu("cart-menu", () => (
        <Link to="/cart">Cart - {app.getData("cart-data").length} </Link>
      ));
    }
  });
}
