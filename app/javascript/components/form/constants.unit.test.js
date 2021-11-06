import * as constants from "./constants";

import { expectObjectHasProperties } from "~test";

describe("<Form /> - Constants", () => {
  it("should have known properties", () => {
    expectObjectHasProperties(constants, [
      "DIALOG_TRIGGER",
      "CHECK_BOX_FIELD",
      "CUSTOM_LOOKUPS",
      "DATE_FIELD",
      "ERROR_FIELD",
      "FORM_MODE_DIALOG",
      "FORM_MODE_EDIT",
      "FORM_MODE_NEW",
      "FORM_MODE_SHOW",
      "LABEL_FIELD",
      "LINK_FIELD",
      "NUMERIC_FIELD",
      "OPTION_TYPES",
      "ORDERABLE_OPTIONS_FIELD",
      "PARENT_FORM",
      "PHOTO_FIELD",
      "RADIO_FIELD",
      "SELECT_FIELD",
      "SEPARATOR",
      "SUBFORM_SECTION",
      "TEXT_AREA",
      "TEXT_FIELD",
      "TICK_FIELD",
      "TOGGLE_FIELD",
      "DOCUMENT_FIELD",
      "AUDIO_FIELD",
      "HIDDEN_FIELD",
      "SELECT_CHANGE_REASON",
      "EMPTY_VALUE"
    ]);
  });

  it("should have known properties for OPTION_TYPES", () => {
    expectObjectHasProperties(constants.OPTION_TYPES, [
      "AGENCY",
      "AGENCY_CURRENT_USER",
      "FORM_GROUP",
      "FORM_GROUP_LOOKUP",
      "LOCATION",
      "LOOKUPS",
      "MANAGED_ROLE_FORM_SECTIONS",
      "MODULE",
      "RECORD_FORMS",
      "REFER_TO_USERS",
      "REPORTING_LOCATIONS",
      "ROLE",
      "ROLE_EXTERNAL_REFERRAL",
      "ROLE_PERMITTED",
      "SERVICE_TYPE",
      "TRANSFER_TO_USERS",
      "USER",
      "USER_GROUP",
      "USER_GROUP_PERMITTED"
    ]);
  });
});
