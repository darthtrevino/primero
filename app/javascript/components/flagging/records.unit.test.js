import * as records from "./records";

import { expectObjectHasProperties } from "~test";

describe("Flaggging - records", () => {
  it("exports expected properties", () => {
    expectObjectHasProperties(records, ["FlagRecord"]);
  });
});
