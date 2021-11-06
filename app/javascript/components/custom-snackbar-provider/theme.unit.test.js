import * as theme from "./theme";

import { expectObjectHasProperties } from "~test";

describe("<CustomSnackbarProvider /> - theme", () => {
  it("should known the values", () => {
    expectObjectHasProperties(theme, ["snackVariantClasses"]);
  });

  it("snackVariantClasses should known the classes for the snackbar", () => {
    const currentTheme = { primero: { colors: {} } };

    expectObjectHasProperties(theme.snackVariantClasses(currentTheme), [
      "lessPadding",
      "success",
      "error",
      "warning",
      "info"
    ]);
  });
});
