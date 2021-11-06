import * as helper from "./utils";
import { DefaultButton, IconButton } from "./components";
import { ACTION_BUTTON_TYPES } from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<AuditLogs /> - Helpers", () => {
  describe("with exposed properties", () => {
    it("should have known methods", () => {
      expectObjectHasProperties(helper, ["buttonType"]);
    });
  });

  describe("buttonType", () => {
    it("should return <DefaultButton /> Component if ACTION_BUTTON_TYPES is default", () => {
      expect(helper.buttonType(ACTION_BUTTON_TYPES.default)).to.equal(DefaultButton);
    });

    it("should return <IconButton /> Component if ACTION_BUTTON_TYPES is icon", () => {
      expect(helper.buttonType(ACTION_BUTTON_TYPES.icon)).to.equal(IconButton);
    });

    it("should return null if any invalid type is passed in", () => {
      expect(helper.buttonType("test")).to.be.null;
    });
  });
});
