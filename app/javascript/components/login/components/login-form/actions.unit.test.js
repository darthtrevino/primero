import actions from "./actions";

import { expectObjectHasProperties } from "~test";

describe("<LoginForm /> - Actions", () => {
  it("should have known actions", () => {
    expectObjectHasProperties(actions, [
      "LOGIN",
      "LOGIN_STARTED",
      "LOGIN_SUCCESS",
      "LOGIN_FINISHED",
      "LOGIN_FAILURE",
      "LOGIN_SUCCESS_CALLBACK"
    ]);
  });
});
