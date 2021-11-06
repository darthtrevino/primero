import { expectObjectHasProperties } from "../../../../test";
import * as index from "./index";

describe("configurations-list/index.js", () => {
  it("exports an object", () => {
    expect(index).to.be.an("object");
  });

  it("has expected properties", () => {
    expectObjectHasProperties(index, ["default", "reducer"]);
  });
});
