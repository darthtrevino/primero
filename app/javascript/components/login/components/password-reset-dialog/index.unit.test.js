import * as indexValues from "./index";

import { expectObjectHasProperties } from "~test";

describe("login/components/<PasswordResetDialog /> - index", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(indexValues, ["default"]);
  });
});
