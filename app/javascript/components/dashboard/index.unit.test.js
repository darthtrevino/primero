import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("<Dashboard /> - index", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(index, [
      "BadgedIndicator",
      "DashboardTable",
      "DoughnutChart",
      "FlagBox",
      "LineChart",
      "OptionsBox",
      "OverviewBox",
      "ActionMenu",
      "DashboardChip",
      "PieChart"
    ]);
  });
});
