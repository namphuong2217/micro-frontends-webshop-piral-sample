import * as React from "react";
import { Redirect } from "react-router-dom";
import { PiletApi } from "app-shell";
import { ProductsPage } from "./components/ProductsPage";
import { ProductDetailsPage } from "./components/ProductDetailsPage";
import { SetRedirect } from "piral";
import { createBrowserHistory } from "history";

history: History;

export function setup(app: PiletApi) {
  app.registerPage("/landing", ({ history }) => (
    <ProductsPage history={history} />
  ));

  app.registerPage("/products/:id?", ({ history, match, piral }) => (
    <ProductDetailsPage
      id={match.params.id || "1"}
      history={history}
      BuyButton={({ product }) => (
        <piral.Extension name="buy-button" params={{ product }} />
      )}
      Recommendations={({ category }) => (
        <piral.Extension name="recommendations" params={{ category }} />
      )}
    />
  ));

  const history = createBrowserHistory();

  // Event from Recommendation pilet
  app.on("recommendation-click-event", (data) => {
    const navigateToNewPage = () => {
      history.push(`/products/${data.id}`);
      window.location.reload();
      // <Redirect to={`/products/${data.productId}`} />;
      // <SetRedirect from="/" to="/landing" />;
    };
    return navigateToNewPage();
  });
}
