import * as React from "react";
import { CartPage, CartPageProps } from "../components/CartPage";
import { History } from "history";

import { shallow, mount, render } from "enzyme";

describe("CartPage", () => {
  const cartTestData = [
    {
      id: "1",
      name: "Green Tea Powder",
      image: require("../assets/images/tea1.jpg"),
      price: 120,
    },
    {
      id: "2",
      name: "Bubble Gum",
      image: require("../assets/images/tea2.jpg"),
      price: 80,
    },
    {
      id: "3",
      name: "Green Rose",
      image: require("../assets/images/tea3.jpg"),
      price: 50,
    },
  ];
  it("renders", () => {
    render(<CartPage cart={cartTestData} />);
  });
});
