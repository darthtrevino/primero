import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("ChangeLogItems - Constants", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, ["NAME"]);
  });
});
