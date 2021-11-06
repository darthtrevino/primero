import actions from "./actions";

import { expectObjectHasProperties } from "~test";

describe("<AgenciesList /> - Actions", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(actions, [
      "AGENCIES",
      "AGENCIES_STARTED",
      "AGENCIES_SUCCESS",
      "AGENCIES_FAILURE",
      "AGENCIES_FINISHED",
      "CLEAR_METADATA",
      "SET_AGENCIES_FILTER"
    ]);
  });
});
