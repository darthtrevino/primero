import { expect } from "../../test";

import * as index from "./index";

describe("<Form /> - index", () => {
  const indexValues = { ...index };

  it("should have known properties", () => {
    expect(indexValues).to.be.an("object");
    [
      "CHECK_BOX_FIELD",
      "ERROR_FIELD",
      "FORM_MODE_DIALOG",
      "FieldRecord",
      "FormAction",
      "FormSectionRecord",
      "PHOTO_FIELD",
      "SELECT_FIELD",
      "TEXT_AREA",
      "TEXT_FIELD",
      "TICK_FIELD",
      "default",
      "whichFormMode"
    ].forEach(property => {
      expect(indexValues).to.have.property(property);
      delete indexValues[property];
    });
    expect(indexValues).to.be.empty;
  });
});
