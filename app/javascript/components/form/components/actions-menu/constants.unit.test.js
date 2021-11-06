import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<Form />/components/<ActionsMenu /> - constants", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, ["NAME"]);
  });
});
