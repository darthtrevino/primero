import * as constants from "./index";

import { expectObjectHasProperties } from "~test";

describe("<IndexFilters /> - index", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, [
      "default",
      "reducer",
      "applyFilters",
      "getFiltersValuesByRecordType",
      "OR_FIELDS",
      "FILTER_TYPES",
      "DEFAULT_FILTERS"
    ]);
  });
});
