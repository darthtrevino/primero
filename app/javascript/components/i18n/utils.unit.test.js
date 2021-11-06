import * as utils from "./utils";
import { ORIENTATION } from "./constants";

import { expectObjectHasProperties } from "~test";

describe("I8n - utils", () => {
  describe("with exposed properties", () => {
    it("should have known methods", () => {
      expectObjectHasProperties(utils, ["getLocaleDir"]);
    });
  });

  describe("getLocaleDir", () => {
    it("should return rtl when recieve any locale RTL orientation locale", () => {
      expect(utils.getLocaleDir("ar")).to.be.equal(ORIENTATION.rtl);
      expect(utils.getLocaleDir("ar-LB")).to.be.equal(ORIENTATION.rtl);
      expect(utils.getLocaleDir("ar-SD")).to.be.equal(ORIENTATION.rtl);
      expect(utils.getLocaleDir("ku")).to.be.equal(ORIENTATION.rtl);
      expect(utils.getLocaleDir("zh")).to.be.equal(ORIENTATION.rtl);
    });

    it("hould return rtl when recieve any locale LTR orientation locale", () => {
      expect(utils.getLocaleDir("en")).to.be.equal(ORIENTATION.ltr);
      expect(utils.getLocaleDir("as")).to.be.equal(ORIENTATION.ltr);
    });
  });
});
