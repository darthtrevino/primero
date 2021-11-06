import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("<Nav />/components/<NetworkIndicator /> - index", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(index, ["default"]);
  });
});
