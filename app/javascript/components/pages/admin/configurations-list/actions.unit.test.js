import { expectObjectHasProperties } from "../../../../test";
import actions from "./actions";

describe("configurations-list/actions.js", () => {
  it("exports an object", () => {
    expect(actions).to.be.an("object");
  });

  it("has expected properties", () => {
    expectObjectHasProperties(actions, [
      "CLEAR_METADATA",
      "FETCH_CONFIGURATIONS",
      "FETCH_CONFIGURATIONS_STARTED",
      "FETCH_CONFIGURATIONS_SUCCESS",
      "FETCH_CONFIGURATIONS_FAILURE",
      "FETCH_CONFIGURATIONS_FINISHED"
    ]);
  });
});
