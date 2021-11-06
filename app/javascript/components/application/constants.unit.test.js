import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<Application /> - Constants", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, ["DEMO", "PERMISSIONS", "RESOURCES", "RESOURCE_ACTIONS", "LIMITED"]);
  });

  it("should have known RESOURCES properties", () => {
    expectObjectHasProperties(constants.RESOURCES, ["agency", "role"]);
  });
});
