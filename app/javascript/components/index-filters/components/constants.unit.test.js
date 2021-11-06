import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<IndexFilters> - Components - Constants", () => {
  it("should have known constant", () => {
    expectObjectHasProperties(constants, ["NAME"]);
  });
});
