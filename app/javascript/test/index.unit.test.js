import * as moduleToTest from "./index";
import { expectObjectHasProperties } from "~test";

describe("app/javascript/test/index", () => {
  it("has expected properties", () => {
    expectObjectHasProperties(moduleToTest, [
      "abbrMonthNames",
      "setupMockFieldComponent",
      "setupMockFormComponent",
      "setupMountedComponent",
      "setupMountedThemeComponent",
      "spy",
      "stub",
      "fake",
      "tick",
      "useFakeTimers",
      "mock",
      "createSimpleMount",
      "createMockStore",
      "createMiddleware",
      "listHeaders",
      "lookups",
      "translateOptions",
      "setupHook",
      "expectObjectHasProperties"
    ]);
  });
});
