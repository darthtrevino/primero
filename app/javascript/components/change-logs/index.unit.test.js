import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("ChangeLogs - index", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(index, ["default", "reducer"]);
  });
});
