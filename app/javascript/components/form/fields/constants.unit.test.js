import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<Form />/fields - Constants", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, ["ERROR_FIELD_NAME", "ORDERABLE_OPTIONS_FIELD_NAME"]);
  });
});
