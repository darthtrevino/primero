import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("<Form />/components/<FormSectionTabs /> - index", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(index, ["default"]);
  });
});
