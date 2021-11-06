import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("layouts/components/<AppLayout> - constants", () => {
  it("should have known constant", () => {
    expectObjectHasProperties(constants, ["NAME"]);
  });
});
