import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("<AdminFilters /> - pages/admin/components/filters/index", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(index, ["default"]);
  });
});
