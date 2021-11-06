import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<CustomSnackbarProvider /> - Constants", () => {
  it("should have known constant", () => {
    expectObjectHasProperties(constants, ["NAME"]);
  });
});
