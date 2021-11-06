import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<TextWithClose /> - constants", () => {
  it("should have known constant", () => {
    expectObjectHasProperties(constants, ["NAME"]);
  });
});
