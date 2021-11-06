import * as actions from "./actions";

import { expectObjectHasProperties } from "~test";

describe("<RecordActions /> - Actions", () => {
  it("should have known actions", () => {
    expectObjectHasProperties(actions, ["SET_DIALOG", "SET_DIALOG_PENDING", "CLEAR_DIALOG"]);
  });
});
