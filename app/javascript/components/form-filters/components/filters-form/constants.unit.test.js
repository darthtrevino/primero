import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<AdminFilters /> - pages/admin/components/filters/constants", () => {
  it("should have known constant", () => {
    expectObjectHasProperties(constants, ["FILTERS_DRAWER", "NAME"]);
  });
});
