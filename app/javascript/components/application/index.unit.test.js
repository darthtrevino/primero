import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("<Application /> - index", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(index, [
      "fetchRoles",
      "fetchSystemPermissions",
      "fetchSystemSettings",
      "fetchUserGroups",
      "getEnabledAgencies",
      "getEnabledUserGroups",
      "getResourceActions",
      "getSystemPermissions",
      "loadApplicationResources",
      "PERMISSIONS",
      "reducer",
      "RESOURCES",
      "RESOURCE_ACTIONS",
      "selectAgencies",
      "getAgency",
      "getUserGroups",
      "selectLocales",
      "selectModule",
      "selectModules",
      "selectUserIdle",
      "selectUserModules",
      "setUserIdle",
      "useApp",
      "ApplicationProvider"
    ]);
  });
});
