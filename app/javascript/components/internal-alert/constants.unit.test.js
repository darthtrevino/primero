import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("Verifying config constant", () => {
  it("should have known constant", () => {
    expectObjectHasProperties(constants, ["NAME", "SEVERITY"]);
  });

  it("should have known the SEVERITY properties ", () => {
    expectObjectHasProperties(constants.SEVERITY, ["error", "info", "success", "warning"]);
  });
});
