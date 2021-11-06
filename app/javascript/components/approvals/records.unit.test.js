import * as records from "./records";

import { expectObjectHasProperties } from "~test";

describe("Approvals - records", () => {
  it("exports expected properties", () => {
    expectObjectHasProperties(records, ["ApprovalsRecord"]);
  });
});
