import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("FlagDialog - index", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(index, ["default"]);
  });
});
