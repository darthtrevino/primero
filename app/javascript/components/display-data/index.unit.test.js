import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("<DisplayData /> - Index", () => {
  it("should have known constant", () => {
    expectObjectHasProperties(index, ["default"]);
  });
});
