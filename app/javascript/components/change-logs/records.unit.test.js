import * as records from "./records";

import { expectObjectHasProperties } from "~test";

describe("ChangeLogs - records", () => {
  it("exports expected values", () => {
    expectObjectHasProperties(records, ["ChangeLogsRecord"]);
  });
});
