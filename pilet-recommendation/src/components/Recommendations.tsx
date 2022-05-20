import * as React from "react";
import { Link } from "react-router-dom";
import { productsRecommendation } from "../data/productsRecommendation";

export interface RecommendationsProps {
  category: string;
  navigate(id: string): void;
}

export const Recommendations: React.FC<RecommendationsProps> = ({
  category,
  navigate,
}) => {
  const recommendations = productsRecommendation.filter(
    (product) => product.category === category // && product.id !== id
  );
  return (
    <div className="green-recos" id="reco">
      <h3>Related Products</h3>
      {recommendations.map((recommendationProduct) => (
        <button
          key={recommendationProduct.id}
          type="button"
          onClick={() => navigate(recommendationProduct.id)}
        >
          <img
            src={recommendationProduct.image}
            key={recommendationProduct.id}
            alt={recommendationProduct.name}
          />
        </button>
      ))}
    </div>
  );
};

// onClick={() =>
//   history.push(`/products/${recommendationProduct.id}`)
// }
{
  /* <Link to={`/products/${recommendationProduct.id}`}>
            <img
              src={recommendationProduct.image}
              key={recommendationProduct.id}
              alt={recommendationProduct.name}
            />
          </Link> */
}
