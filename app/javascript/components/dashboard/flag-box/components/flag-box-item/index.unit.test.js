import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("app/javascript/components/dashboard/flag-box-item/index", () => {
  it("exports expected properties", () => {
    expectObjectHasProperties(index, ["default"]);
  });
});
