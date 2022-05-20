import * as React from "react";
import { Recommendations } from "../components/Recommendations";
import { productsRecommendation } from "../data/productsRecommendation";

import { shallow, mount, render } from "enzyme";

describe("Recommendations", () => {
  it("renders", () => {
    const navigate = jest.fn();
    render(<Recommendations category="A" navigate={navigate} />);
  });

  it("clicks navigate button", () => {
    const navigate = jest.fn();
    const wrapper = shallow(
      <Recommendations category="A" navigate={navigate} />
    );

    wrapper.find("button").first().simulate("click");
    expect(navigate).toHaveBeenCalled();
  });
});
