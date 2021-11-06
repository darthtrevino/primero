import { expectObjectHasProperties } from "../../../../test";
import actions from "./actions";

describe("<ContactInformation /> - Actions", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(actions, [
      "SAVE_CONTACT_INFORMATION",
      "SAVE_CONTACT_INFORMATION_STARTED",
      "SAVE_CONTACT_INFORMATION_FINISHED",
      "SAVE_CONTACT_INFORMATION_SUCCESS",
      "SAVE_CONTACT_INFORMATION_FAILURE"
    ]);
  });
});
