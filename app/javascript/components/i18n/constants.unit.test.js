import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("I8n - constants", () => {
  it("should have known constant", () => {
    expectObjectHasProperties(constants, ["ORIENTATION"]);
  });
});
