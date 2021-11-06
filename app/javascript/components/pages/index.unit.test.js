import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("pages - index", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(index, [
      "Admin",
      "AgenciesForm",
      "AgenciesList",
      "AuditLogs",
      "CodeOfConduct",
      "ConfigurationsList",
      "ConfigurationsForm",
      "Dashboard",
      "ExportList",
      "FormBuilder",
      "FormsList",
      "LocationsList",
      "LookupsForm",
      "LookupsList",
      "NotAuthorized",
      "NotFound",
      "PotentialMatches",
      "RolesForm",
      "RolesList",
      "Support",
      "TaskList",
      "ContactInformation",
      "UserGroupsForm",
      "UserGroupsList",
      "UsersForm",
      "UsersList"
    ]);
  });
});
