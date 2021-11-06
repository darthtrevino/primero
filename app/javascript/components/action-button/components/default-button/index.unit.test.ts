import * as index from "./index";
import { expectObjectHasProperties } from "~test";

describe("<ActionButton />  - components/default-button/index", () => {
  it("exports an object", () => {
    expect(index).to.be.an("object");
  });

  it("exports expected properties", () => {
    expectObjectHasProperties(index, ["default"]);
  });
});
