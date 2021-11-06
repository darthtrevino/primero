import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("<AuditLogs /> - pages/admin/audit-logs/index", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(index, ["default", "reducer"]);
  });
});
