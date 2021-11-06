import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("app/javascript/components/dashboard/flag-box/components/index", () => {
  it("exports expected properties", () => {
    expectObjectHasProperties(index, ["FlagBoxItem"]);
  });
});
