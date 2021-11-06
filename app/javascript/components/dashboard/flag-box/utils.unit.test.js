import { fromJS } from "immutable";

import * as utils from "./utils";

import { expectObjectHasProperties } from "~test";

describe("components/dashboard/flag-box/utils.unit.test.js", () => {
  describe("with exposed properties", () => {
    it("should have known methods", () => {
      expectObjectHasProperties(utils, ["showId"]);
    });
  });

  describe("with showId", () => {
    it("should return false if any flagged is passed in", () => {
      expect(utils.showId()).to.be.false;
    });

    it("should return false if name prop contains less than 7 asterisks", () => {
      const flag = fromJS({
        name: "Test User"
      });

      expect(utils.showId(flag)).to.be.false;
    });

    it("should return true if name prop contains 7 asterisks", () => {
      const flag = fromJS({
        name: "*******"
      });

      expect(utils.showId(flag)).to.be.true;
    });

    it("should return true if flag's name is null", () => {
      const flag = fromJS({
        name: null
      });

      expect(utils.showId(flag)).to.be.true;
    });
  });
});
