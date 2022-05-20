import * as React from "react";
import { ProductsPage } from "../components/ProductsPage";
import { History } from "history";

import { shallow, mount, render } from "enzyme";

describe("ProductsPage", () => {
  it("renders", () => {
    render(<ProductsPage history={{} as any as History} />);
  });
});
