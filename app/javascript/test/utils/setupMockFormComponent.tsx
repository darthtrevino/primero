import { ComponentType, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import capitalize from "lodash/capitalize";
import { whichFormMode } from "~components/form";
import { setupMountedComponent } from "./setupMountedComponent";

interface FormField {
  name: number;
  display_name: string;
  help_text: string;
  required?: boolean;
  autoFocus?: boolean;
}
const setupFormInputProps = (field: Partial<FormField> = {}, props: any = {}, mode: any, errors: Error[] = []) => {
  const formMode = whichFormMode(props.mode!);
  const error = errors?.[field.name!];

  return {
    name: field.name,
    error: typeof error !== "undefined",
    required: field.required,
    autoFocus: field.autoFocus,
    autoComplete: "new-password",
    disabled: formMode.get(`is${capitalize(mode)}`),
    label: field.display_name,
    helperText: error?.message || field.help_text,
    fullWidth: true,
    InputLabelProps: {
      shrink: true
    },
    ...props
  };
};

export const setupMockFormComponent = (
  Component: ComponentType,
  {
    props = {},
    parentProps = {},
    state = {},
    defaultValues = {},
    includeFormMethods = false,
    includeFormProvider = false,
    errors
  }: any = {}
) => {
  const MockFormComponent = () => {
    const { inputProps, field, mode } = props;
    const formMethods = useForm({ defaultValues });
    const formMode = whichFormMode(mode || "new");

    const commonInputProps = setupFormInputProps(field, inputProps, mode, formMethods?.errors as any);

    const componentProps = {
      ...props,
      ...(includeFormMethods ? formMethods : {}),
      commonInputProps,
      ...inputProps
    };

    useEffect(() => {
      if (errors) {
        errors.forEach((error: any) => {
          const { name, message } = error;

          formMethods.setError(name, { type: "manual", message });
        });
      }
    }, [errors]);

    if (includeFormProvider) {
      return (
        <FormProvider {...formMethods} {...{ formMode }}>
          <Component {...componentProps} />
        </FormProvider>
      );
    }

    return <Component {...componentProps} formMode={formMode} formMethods={formMethods} />;
  };

  return setupMountedComponent(MockFormComponent, parentProps, state);
};
