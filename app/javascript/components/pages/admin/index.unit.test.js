import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("pages/admin - index", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(index, [
      "default",
      "AgenciesForm",
      "AgenciesList",
      "AuditLogs",
      "CodeOfConduct",
      "ConfigurationsList",
      "ConfigurationsForm",
      "ContactInformation",
      "FormBuilder",
      "FormsList",
      "LocationsList",
      "LookupsForm",
      "LookupsList",
      "RolesForm",
      "RolesList",
      "UserGroupsForm",
      "UserGroupsList",
      "UsersForm",
      "UsersList"
    ]);
  });
});
