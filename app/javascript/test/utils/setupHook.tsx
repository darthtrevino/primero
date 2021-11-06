import { fromJS } from "immutable";
import { Provider } from "react-redux";
import I18nProvider from "~components/i18n";
import isFunction from "lodash/isFunction";
import { renderHook, act } from "@testing-library/react-hooks";
import { DEFAULT_STATE } from "./DEFAULT_STATE";
import { createMockStore } from "./createMockStore";

export function setupHook(hook: (input: unknown) => unknown, state = {}) {
  const { store } = createMockStore(DEFAULT_STATE, fromJS(state));

  if (!hook && !isFunction(hook)) {
    throw new Error("Hook function not specified");
  }

  const result = renderHook(hook, {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <I18nProvider>{children as any}</I18nProvider>
      </Provider>
    )
  });

  return { ...result, store, act };
}
