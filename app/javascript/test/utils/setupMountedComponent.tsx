import { ThemeProvider } from "@material-ui/core/styles";
import { createMockStore } from "./createMockStore";
import { Form, Formik, FormikConfig } from "formik";
import { SnackbarProvider } from "notistack";
import { MemoryRouter, Router } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { ApplicationProvider } from "~components/application";
import { createMount } from "@material-ui/core/test-utils";
import I18nProvider from "~components/i18n";
import isEmpty from "lodash/isEmpty";
import { Provider } from "react-redux";
import { theme as appTheme } from "~config";
import { DEFAULT_STATE } from "./DEFAULT_STATE";
import { ComponentType } from "react";

const theme = appTheme();

export function setupMountedComponent<Props>(
  TestComponent: ComponentType<Props>,
  props: Props = {} as Props,
  initialState = {},
  initialEntries = [],
  formProps = {}
) {
  const { store, history } = createMockStore(DEFAULT_STATE, initialState);

  const FormikComponent = ({
    formikProps,
    componentProps
  }: {
    formikProps: FormikConfig<unknown>;
    componentProps: Props;
  }) => {
    if (isEmpty(formikProps)) {
      return <TestComponent {...componentProps} />;
    }

    return (
      <Formik {...formikProps}>
        <Form>
          <TestComponent {...componentProps} />
        </Form>
      </Formik>
    );
  };

  const RoutedProvider = () => {
    const formikComponentProps = {
      formikProps: formProps as FormikConfig<unknown>,
      componentProps: props
    };

    if (isEmpty(initialEntries)) {
      return (
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <FormikComponent {...formikComponentProps} />
          </Router>
        </ThemeProvider>
      );
    }

    return (
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={initialEntries}>
          <FormikComponent {...formikComponentProps} />
        </MemoryRouter>
      </ThemeProvider>
    );
  };

  const component = createMount()(
    <Provider store={store}>
      <I18nProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <SnackbarProvider>
            <ApplicationProvider>
              <RoutedProvider />
            </ApplicationProvider>
          </SnackbarProvider>
        </MuiPickersUtilsProvider>
      </I18nProvider>
    </Provider>
  );

  return { component, store };
}
