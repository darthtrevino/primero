import * as index from "./index";
import { expectObjectHasProperties } from "~test";

describe("<ActionButton />  - components/index", () => {
  it("exports an object", () => {
    expect(index).to.be.an("object");
  });

  it("has expected properties", () => {
    expectObjectHasProperties(index, ["default", "ACTION_BUTTON_TYPES"]);
  });
});
