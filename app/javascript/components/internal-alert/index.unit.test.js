import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("<InternalAlert /> - index", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(index, ["default", "SEVERITY"]);
  });
});
