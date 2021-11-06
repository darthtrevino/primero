import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("pages/account/constants.js", () => {
  describe("properties", () => {
    expectObjectHasProperties(constants, ["NAME", "FORM_ID"]);
  });
});
