import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("<BadgedIndicator /> - Index", () => {
  it("should have known constant", () => {
    expectObjectHasProperties(index, ["default"]);
  });
});
