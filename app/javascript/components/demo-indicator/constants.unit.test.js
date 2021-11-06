import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("demo-indicator/constants", () => {
  it("exports an object", () => {
    expect(constants).to.be.an("object");
  });

  it("exports known constants", () => {
    expectObjectHasProperties(constants, ["NAME"]);
  });
});
