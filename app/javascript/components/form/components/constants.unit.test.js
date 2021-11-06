import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<Form />/components - Constants", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, ["FORM_SECTION_NAME"]);
  });
});
