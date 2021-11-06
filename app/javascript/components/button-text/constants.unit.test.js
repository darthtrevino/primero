import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<ButtonText/> - constants", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, ["NAME"]);
  });
});
