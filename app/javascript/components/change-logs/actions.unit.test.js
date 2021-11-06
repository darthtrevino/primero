import actions from "./actions";
import { expectObjectHasProperties } from "~test";

describe("ChangeLogs - Actions", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(actions, [
      "FETCH_CHANGE_LOGS",
      "FETCH_CHANGE_LOGS_STARTED",
      "FETCH_CHANGE_LOGS_SUCCESS",
      "FETCH_CHANGE_LOGS_FAILURE",
      "FETCH_CHANGE_LOGS_FINISHED"
    ]);
  });
});
