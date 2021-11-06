import { expectObjectHasProperties } from "../../../../test";
import * as constants from "./constants";

describe("configurations-list/constants.js", () => {
  it("exports an object", () => {
    expect(constants).to.be.an("object");
  });

  it("has expected properties", () => {
    expectObjectHasProperties(constants, ["NAME"]);
  });
});
