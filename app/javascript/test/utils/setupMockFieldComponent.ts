import { ComponentType } from "react";
import { setupMockFormComponent } from "./setupMockFormComponent";

export function setupMockFieldComponent(
  fieldComponent: ComponentType,
  FieldRecord: any,
  fieldRecordSettings = {},
  inputProps = {},
  metaInputProps = {},
  mode = "new",
  errors: Error[] | undefined
) {
  const field = setupFormFieldRecord(FieldRecord, fieldRecordSettings);

  return setupMockFormComponent(fieldComponent, {
    props: {
      inputProps,
      metaInputProps,
      field,
      mode
    },
    errors
  });
}

function setupFormFieldRecord(FieldRecord: any, field = {}) {
  return FieldRecord({
    display_name: "Test Field 2",
    name: "test_field_2",
    type: "text_field",
    help_text: "Test Field 2 help text",
    required: true,
    autoFocus: true,
    ...field
  });
}
