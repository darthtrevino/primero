import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("ListFlagsItem - Constants", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, ["NAME"]);
  });
});
