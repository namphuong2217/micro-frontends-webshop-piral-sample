import * as React from "react";
import { PiletApi } from "app-shell";
import { Recommendations } from "./components/Recommendations";

interface RecommendationExtension {
  category: string;
}

export function setup(app: PiletApi) {
  const navigateToNewProduct = (id) => {
    app.emit("recommendation-click-event", {
      id,
    });
  };

  app.registerExtension<RecommendationExtension>(
    "recommendations",
    ({ params }) => (
      <Recommendations
        category={params.category}
        navigate={navigateToNewProduct}
      />
    )
  );
}
