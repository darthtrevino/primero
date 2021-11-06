import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<AuditLogs /> pages/admin/audit-logs/constants", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, [
      "AUDIT_LOG",
      "DATA",
      "DEFAULT_FILTERS",
      "ERRORS",
      "LOADING",
      "METADATA",
      "NAME",
      "TIMESTAMP",
      "USER_NAME"
    ]);
  });
});
