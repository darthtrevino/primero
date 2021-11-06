import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("ChangeLogs - Constants", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, [
      "APPROVALS",
      "CREATE_ACTION",
      "EMPTY_VALUE",
      "EXCLUDED_LOG_ACTIONS",
      "INCIDENTS",
      "NAME",
      "SUBFORM",
      "TYPE"
    ]);
  });
});
