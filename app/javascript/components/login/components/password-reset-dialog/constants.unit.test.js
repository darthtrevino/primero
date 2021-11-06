import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("Verifying config constant", () => {
  it("should have known constant", () => {
    expectObjectHasProperties(constants, ["NAME", "FORM_ID"]);
  });
});
