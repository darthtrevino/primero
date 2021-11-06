import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("<Notifier />- index", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(index, [
      "CLOSE_SNACKBAR",
      "closeSnackbar",
      "ENQUEUE_SNACKBAR",
      "enqueueSnackbar",
      "generate",
      "default",
      "reducer",
      "REMOVE_SNACKBAR",
      "removeSnackbar",
      "SNACKBAR_VARIANTS"
    ]);
  });
});
