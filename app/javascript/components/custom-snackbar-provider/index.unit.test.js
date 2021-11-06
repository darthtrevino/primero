import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("<CustomSnackbarProvider /> - index", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(index, ["default"]);
  });
});
