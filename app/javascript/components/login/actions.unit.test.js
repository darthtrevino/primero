import actions from "./actions";

import { expectObjectHasProperties } from "../../test";

describe("<Login /> - Actions", () => {
  it("should have known actions", () => {
    expectObjectHasProperties(actions, ["LOGIN", "LOGIN_SUCCESS", "LOGIN_STARTED", "LOGIN_FAILURE", "LOGIN_FINISHED"]);
  });
});
