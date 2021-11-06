import * as approvalsConstants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<Approvals /> - Constants", () => {
  it("should have known constant", () => {
    expectObjectHasProperties(approvalsConstants, [
      "CASE_PLAN",
      "NAME",
      "NAME_DETAIL",
      "NAME_PANEL",
      "NAME_SUMMARY",
      "STATUS_APPROVED",
      "STATUS_REJECTED"
    ]);
  });
});
