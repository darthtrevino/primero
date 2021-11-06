import * as index from "./index";
import { expectObjectHasProperties } from "~test";

describe("IncidentFromCase - Detail - index", () => {
  it("should have known exported properties", () => {
    expectObjectHasProperties(index, ["default"]);
  });
});
