import * as displayDataConstants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<DisplayData /> - Constants", () => {
  it("should have known constant", () => {
    expectObjectHasProperties(displayDataConstants, ["NAME"]);
  });
});
