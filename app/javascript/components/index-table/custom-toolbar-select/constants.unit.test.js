import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<CustomToolbarSelect /> - constants", () => {
  it("should have known constant", () => {
    expectObjectHasProperties(constants, ["NAME"]);
  });
});
