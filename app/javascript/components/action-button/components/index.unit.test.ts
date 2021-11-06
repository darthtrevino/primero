/* eslint-disable import/no-namespace */
import * as index from "./index";
import { expectObjectHasProperties } from "~test";

describe("<ActionButton />  - index", () => {
  it("exports an object", () => {
    expect(index).to.be.an("object");
  });

  it("exports expected properties", () => {
    expectObjectHasProperties(index, ["DefaultButton", "IconButton"]);
  });
});
