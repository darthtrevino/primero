import * as moduleToTest from "./index";

describe("app/javascript/test/utils/index", () => {
  it("has expected properties"),
    () => {
      moduleToTest.expectObjectHasProperties(moduleToTest, [
        "abbrMonthNames",
        "setupMockFieldComponent",
        "setupMockFormComponent",
        "setupMountedComponent",
        "setupMountedThemeComponent",
        "tick",
        "createSimpleMount",
        "createMiddleware",
        "createMockStore",
        "listHeaders",
        "lookups",
        "translateOptions",
        "setupHook",
        "expectObjectHasProperties"
      ]);
    };
});
