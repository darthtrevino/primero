import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<ActionButton />  - constants", () => {
  it("exports an object", () => {
    expect(constants).to.be.an("object");
  });

  it("has expected properties", () => {
    expectObjectHasProperties(constants, ["NAME", "ACTION_BUTTON_TYPES"]);
  });
});
