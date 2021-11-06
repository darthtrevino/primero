import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("Unflag - Constants", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, ["NAME", "UNFLAG_DIALOG", "FORM_ID"]);
  });
});
