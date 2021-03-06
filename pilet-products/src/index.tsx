import * as React from "react";
import { Redirect } from "react-router-dom";
import { PiletApi } from "app-shell";
import { ProductsPage } from "./components/ProductsPage";
import { createBrowserHistory } from "history";

const ProductDetailsPage = React.lazy(
  () => import("./components/ProductDetailsPage")
);

export function setup(app: PiletApi) {
  // page resgistrations
  app.registerPage("/landing", ({ history }) => (
    <ProductsPage history={history} />
  ));

  app.registerPage("/products/:id?", ({ history, match, piral }) => (
    <ProductDetailsPage
      id={match.params.id || "1"}
      history={history}
      BuyButton={({ product }) => (
        <piral.Extension
          name="buy-button"
          params={{ product }}
          empty={() => (
            <div className="blue-buy" id="buy">
              {" "}
              Buy button from (Micro Frontend) Pilet Carts{" "}
            </div>
          )}
        />
      )}
      Recommendations={({ category }) => (
        <piral.Extension
          name="recommendations"
          params={{ category }}
          empty={() => (
            <div className="green-recos" id="reco">
              {" "}
              Recommendation products from (Micro Frontend) Pilet Recommendation{" "}
            </div>
          )}
        />
      )}
    />
  ));

  const history = createBrowserHistory();

  // Event from Recommendation pilet
  // Pilet Products carries out the actual navigation
  app.on("recommendation-click-event", (data) => {
    const navigateToNewPage = () => {
      history.push(`/products/${data.id}`);
      window.location.reload();
    };
    return navigateToNewPage();
  });
}

// <Redirect to={`/products/${data.productId}`} />;
// <SetRedirect from="/" to="/landing" />;
// history: History;
// import { ProductDetailsPage } from "./components/ProductDetailsPage";
// import { SetRedirect } from "piral";
