import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("Approvals - index", () => {
  it("has expected properties", () => {
    expectObjectHasProperties(index, ["default"]);
  });
});
