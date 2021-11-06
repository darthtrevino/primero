import { stub } from "../../../../test";
import { RECORD_PATH } from "../../../../config";
import { ENQUEUE_SNACKBAR, generate } from "../../../notifier";

import * as actionsCreators from "./action-creators";

import actions from "./actions";

import { expectObjectHasProperties } from "~test";

describe("<AgenciesForm /> - Action Creators", () => {
  it("should have known action creators", () => {
    expectObjectHasProperties(actionsCreators, ["fetchAgency", "saveAgency", "clearSelectedAgency"]);
  });

  it("should check that 'fetchAgency' action creator returns the correct object", () => {
    const expectedAction = {
      type: actions.FETCH_AGENCY,
      api: {
        path: `${RECORD_PATH.agencies}/10`
      }
    };

    expect(actionsCreators.fetchAgency(10)).to.deep.equal(expectedAction);
  });

  it("should check that 'saveAgency' action creator returns the correct object", () => {
    stub(generate, "messageKey").returns(4);

    const args = {
      id: 10,
      body: {
        prop1: "prop-1"
      },
      saveMethod: "update",
      message: "Updated successfully"
    };

    const expectedAction = {
      type: actions.SAVE_AGENCY,
      api: {
        path: `${RECORD_PATH.agencies}/10`,
        method: "PATCH",
        body: args.body,
        successCallback: {
          action: ENQUEUE_SNACKBAR,
          payload: {
            message: args.message,
            options: {
              key: 4,
              variant: "success"
            }
          },
          redirectWithIdFromResponse: false,
          redirect: `/admin/${RECORD_PATH.agencies}/10`
        }
      }
    };

    expect(actionsCreators.saveAgency(args)).to.deep.equal(expectedAction);

    generate.messageKey.restore();
  });
});
