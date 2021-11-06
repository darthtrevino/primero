import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<IndexFilters /> - filter-types/date-filter/constants", () => {
  it("should have known constant", () => {
    expectObjectHasProperties(constants, ["NAME"]);
  });
});
