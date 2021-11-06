import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("FlagForm - Constants", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, ["NAME", "MAX_LENGTH_FLAG_REASON"]);
  });
});
