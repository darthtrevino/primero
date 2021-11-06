import actions from "./actions";

import { expectObjectHasProperties } from "~test";

describe("pages/account/actions.js", () => {
  it("exports expected properties", () => {
    expectObjectHasProperties(actions, [
      "CLEAR_CURRENT_USER",
      "FETCH_CURRENT_USER",
      "FETCH_CURRENT_USER_STARTED",
      "FETCH_CURRENT_USER_SUCCESS",
      "FETCH_CURRENT_USER_FINISHED",
      "FETCH_CURRENT_USER_FAILURE",
      "UPDATE_CURRENT_USER",
      "UPDATE_CURRENT_USER_FAILURE",
      "UPDATE_CURRENT_USER_STARTED",
      "UPDATE_CURRENT_USER_SUCCESS"
    ]);
  });
});
