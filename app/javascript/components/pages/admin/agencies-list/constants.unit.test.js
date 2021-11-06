import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<AgenciesList /> - Constants", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, ["NAME", "DISABLED"]);
  });
});
