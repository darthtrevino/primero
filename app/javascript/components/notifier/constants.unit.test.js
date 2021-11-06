import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<Notifier/> - constants", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, ["SNACKBAR_VARIANTS"]);
  });

  it("should have known SNACKBAR_VARIANTS properties", () => {
    expectObjectHasProperties(constants.SNACKBAR_VARIANTS, ["error", "info", "success", "warning"]);
  });
});
