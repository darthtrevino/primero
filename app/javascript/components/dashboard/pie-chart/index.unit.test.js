import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("<PieChart /> - index", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(index, ["default"]);
  });
});
