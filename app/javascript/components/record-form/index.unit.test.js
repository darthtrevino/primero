import { expect } from "chai";

import * as index from "./index";

describe("<RecordForm /> - index", () => {
  const indexValues = { ...index };

  it("should have known properties", () => {
    expect(indexValues).to.be.an("object");
    [
      "FieldRecord",
      "FormSectionField",
      "constructInitialValues",
      "default",
      "fetchForms",
      "fetchLookups",
      "fetchOptions",
      "getAssignableForms",
      "getErrors",
      "getFirstTab",
      "getFormNav",
      "getLoadingState",
      "getLocations",
      "getLookups",
      "getOption",
      "getRecordForms",
      "getRecordFormsByUniqueId",
      "getSelectedForm",
      "reducers",
      "setSelectedForm"
    ].forEach(property => {
      expect(indexValues).to.have.property(property);
      delete indexValues[property];
    });
    expect(indexValues).to.be.empty;
  });
});
