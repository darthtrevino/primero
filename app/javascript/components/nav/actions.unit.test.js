import * as actions from "./actions";

import { expectObjectHasProperties } from "~test";

describe("<Nav /> - Actions", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(actions, ["FETCH_ALERTS", "FETCH_ALERTS_SUCCESS"]);
  });
});
