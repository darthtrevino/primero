import constants from "./actions";

import { expectObjectHasProperties } from "~test";

describe("Flagging - Constants", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, [
      "FETCH_FLAGS",
      "FETCH_FLAGS_SUCCESS",
      "UNFLAG",
      "UNFLAG_SUCCESS",
      "ADD_FLAG",
      "ADD_FLAG_SUCCESS",
      "SET_SELECTED_FLAG",
      "SET_SELECTED_FLAG_SUCCESS",
      "FETCH_FLAGS_STARTED",
      "FETCH_FLAGS_FINISHED"
    ]);
  });
});
