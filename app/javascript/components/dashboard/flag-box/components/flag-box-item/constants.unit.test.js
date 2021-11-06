import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("app/javascript/components/dashboard/flag-box-item/constants", () => {
  it("exports expected properties", () => {
    expectObjectHasProperties(constants, ["NAME"]);
  });
});
