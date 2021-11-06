import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("Flagging - Constants", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, ["NAME", "FLAG_DIALOG"]);
  });
});
