import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<IndexFilters /> - Constants", () => {
  it("should have known constant", () => {
    expectObjectHasProperties(constants, [
      "FILTER_TYPES",
      "HIDDEN_FIELDS",
      "PRIMARY_FILTERS",
      "OR_FIELDS",
      "MY_CASES_FILTER_NAME",
      "OR_FILTER_NAME",
      "DEFAULT_FILTERS",
      "DEFAULT_SELECTED_RECORDS_VALUE"
    ]);
  });
});
