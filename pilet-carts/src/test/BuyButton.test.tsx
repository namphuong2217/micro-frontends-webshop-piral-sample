import * as React from "react";
import { BuyButton, BuyButtonProps } from "../components/BuyButton";
import { products } from "../data/products";

import { shallow, mount, render } from "enzyme";

describe("BuyButton", () => {
  it("renders", () => {
    render(
      <BuyButton
        product={{} as any as BuyButtonProps["product"]}
        addToCart={{} as any as BuyButtonProps["addToCart"]}
      />
    );
  });

  // it("clicks purchase button", () => {
  //   const addToCart = jest.fn((Object) => {});
  //   const wrapper = shallow(
  //     <BuyButton
  //       product={{} as any as BuyButtonProps["product"]}
  //       addToCart={{ addToCart }}
  //     />
  //   );

  //   wrapper.find("button").first().simulate("click");
  //   expect(addToCart).toHaveBeenCalled();
  // });
});
