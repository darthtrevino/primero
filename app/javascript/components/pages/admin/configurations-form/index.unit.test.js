import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("configurations-form/index.js", () => {
  it("exports an object", () => {
    expect(index).to.be.an("object");
    expectObjectHasProperties(index, ["default", "reducer"]);
  });
});
