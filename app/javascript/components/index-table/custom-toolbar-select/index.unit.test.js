import * as constants from "./index";

import { expectObjectHasProperties } from "~test";

describe("<CustomToolbarSelect /> - index", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, ["default"]);
  });
});
