import * as moduleToTest from "./index";

import { expectObjectHasProperties } from "~test";

describe("pages/account/index.js", () => {
  it("exports an object", () => {
    expect(moduleToTest).to.be.an("object");
  });

  it("exports expected properties", () => {
    expectObjectHasProperties(moduleToTest, ["default", "reducer"]);
  });
});
