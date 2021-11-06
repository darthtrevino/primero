import { createMemoryHistory } from "history";
import { routerMiddleware } from "connected-react-router/immutable";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fromJS } from "immutable";

export function createMockStore<State>(
  defaultState: State & { merge: (s: State) => State } = fromJS({}),
  initialState: State
) {
  const history = createMemoryHistory();
  const mockStore = configureStore([routerMiddleware(history), thunk]);
  const store = mockStore(defaultState.merge(fromJS(initialState)));

  return { store, history };
}
