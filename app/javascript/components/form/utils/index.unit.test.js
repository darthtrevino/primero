import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("<Form /> - Utils", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(index, [
      "buildRoleOptions",
      "get",
      "notVisible",
      "optionText",
      "submitHandler",
      "touchedFormData",
      "valueParser",
      "whichFormMode"
    ]);
  });
});
