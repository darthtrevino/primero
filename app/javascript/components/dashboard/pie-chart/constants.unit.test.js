import * as pieChartConstants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<PieChart /> - Constants", () => {
  it("should have known constant", () => {
    expectObjectHasProperties(pieChartConstants, ["NAME", "COLORS"]);
  });
});
