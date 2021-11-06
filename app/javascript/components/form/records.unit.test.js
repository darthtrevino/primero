import * as records from "./records";

import { expectObjectHasProperties } from "~test";

describe("Verifying records", () => {
  it("has expected properties", () => {
    expectObjectHasProperties(records, ["FieldRecord", "FormSectionRecord", "Option"]);
  });
});
