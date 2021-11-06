import * as index from "./index";
import { expectObjectHasProperties } from "~test";

describe("layouts/components/<LoginLayout /> - index", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(index, ["default"]);
  });
});
