import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("ListFlagsItemActions - Constants", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, ["NAME"]);
  });
});
