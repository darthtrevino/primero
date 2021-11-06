import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("layouts/components/<LoginLayout> - constants", () => {
  it("should have known constant", () => {
    expectObjectHasProperties(constants, ["NAME"]);
  });
});
