import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<AgenciesForm /> - Constants", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, ["NAME", "FORM_ID", "TERMS_OF_USE", "TERMS_OF_USE_ENABLED"]);
  });
});
