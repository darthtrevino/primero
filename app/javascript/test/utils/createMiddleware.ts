import { fromJS } from "immutable";
import { spy } from "sinon";
import { createMockStore } from "./createMockStore";

export function createMiddleware(middleware: any, initialState: Record<string, any>) {
  const { store } = createMockStore(fromJS({}), initialState);

  const next = spy();

  const invoke = (action: unknown) => middleware(store)(next)(action);

  return { store, next, invoke };
}
