import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("demo-indicator/index", () => {
  it("exports an object", () => {
    expect(index).to.be.an("object");
  });

  it("exports known properties", () => {
    expectObjectHasProperties(index, ["default"]);
  });
});
