import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<IndexFilters /> - filter-types/select-filter/constants", () => {
  it("should have known constant", () => {
    expectObjectHasProperties(constants, ["NAME"]);
  });
});
