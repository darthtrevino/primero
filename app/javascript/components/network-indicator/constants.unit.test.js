import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<Nav />/components/<NetworkIndicator /> - constants", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, ["NAME"]);
  });
});
