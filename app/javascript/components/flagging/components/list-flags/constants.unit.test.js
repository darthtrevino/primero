import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("ListFlags - Constants", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, ["NAME"]);
  });
});
