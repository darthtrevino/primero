import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<ActionButton />  - components/icon-button/constants", () => {
  it("exports an object", () => {
    expect(constants).to.be.an("object");
  });

  it("exports expected properties", () => {
    expectObjectHasProperties(constants, ["NAME"]);
  });
});
