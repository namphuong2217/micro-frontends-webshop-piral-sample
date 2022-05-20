import * as React from "react";
import { History } from "history";
import ProductDetailsPage from "../components/ProductDetailsPage";
import { shallow, mount, render } from "enzyme";

const TestDummyComponent = () => <div />;

describe("ProductDetailsPage", () => {
  it("renders", () => {
    render(
      <ProductDetailsPage
        id={"1"}
        history={{} as any as History}
        BuyButton={TestDummyComponent}
        Recommendations={TestDummyComponent}
      />
    );
  });

  it("calls history push", () => {
    const push = jest.fn();
    const wrapper = shallow(
      <ProductDetailsPage
        id={"1"}
        history={{ push } as any as History}
        BuyButton={TestDummyComponent}
        Recommendations={TestDummyComponent}
      />
    );

    wrapper.find("button").first().simulate("click");
    expect(push).toHaveBeenCalled();
  });
});
