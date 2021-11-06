import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("configurations-form/constants.js", () => {
  it("exports an object", () => {
    expect(constants).to.be.an("object");
  });

  it("exports known constants", () => {
    expectObjectHasProperties(constants, [
      "APPLY_CONFIGURATION_MODAL",
      "DELETE_CONFIGURATION_MODAL",
      "NAME",
      "SEND_CONFIGURATION_MODAL",
      "FORM_ID"
    ]);
  });
});
