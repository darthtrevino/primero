import * as constants from "./constants";
import { expectObjectHasProperties } from "~test";

describe("<IncidentFromCase /> - constants", () => {
  it("should have known constant", () => {
    expectObjectHasProperties(constants, ["NAME", "NAME_DETAIL", "NAME_PANEL", "NAME_SUMMARY", "REDIRECT_DIALOG"]);
  });
});
