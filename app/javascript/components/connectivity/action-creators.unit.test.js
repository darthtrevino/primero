import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { CLOSE_SNACKBAR } from "../notifier/actions";

import * as actionCreators from "./action-creators";
import actions from "./actions";

import { expectObjectHasProperties } from "~test";

describe("components/connectivity/action-creator.js", () => {
  it("should have known action creators", () => {
    expectObjectHasProperties(actionCreators, [
      "setNetworkStatus",
      "getServerStatus",
      "checkServerStatus",
      "setQueueStatus",
      "setPendingUserLogin"
    ]);
  });

  it("should create an action to set the network status", () => {
    const expectedAction = {
      type: actions.NETWORK_STATUS,
      payload: true
    };

    expect(actionCreators.setNetworkStatus(true)).to.eql(expectedAction);
  });

  it("should create an action to check server status", () => {
    const store = configureStore([thunk])({});

    actionCreators.checkServerStatus(true)(store.dispatch);

    const expectedActions = store.getActions();

    expect(expectedActions[0].type).to.eql(CLOSE_SNACKBAR);
    expect(expectedActions[1].type).to.eql(actions.NETWORK_STATUS);
    expect(expectedActions[2].type).to.eql(actions.SERVER_STATUS);
  });
});
