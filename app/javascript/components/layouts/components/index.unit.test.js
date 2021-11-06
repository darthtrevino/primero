import * as index from "./index";

import { expectObjectHasProperties } from "~test";

describe("layouts/components - index", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(index, ["AppLayout", "LoginLayout", "EmptyLayout"]);
  });
});
