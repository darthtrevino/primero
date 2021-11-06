import { RECORD_PATH } from "../../../../config";

import * as actionsCreators from "./action-creators";
import actions from "./actions";

import { expectObjectHasProperties } from "~test";

describe("<AgenciesList /> - Action Creators", () => {
  it("should have known action creators", () => {
    expectObjectHasProperties(actionsCreators, ["fetchAgencies", "setAgenciesFilter"]);
  });

  it("should check that 'fetchAgencies' action creator returns the correct object", () => {
    const expectedAction = {
      type: actions.AGENCIES,
      api: {
        params: {
          managed: true
        },
        path: RECORD_PATH.agencies
      };
    };

    expect(actionsCreators.fetchAgencies()).to.deep.equal(expectedAction);
  });

  it("should check that 'setAgenciesFilter' action creator returns the correct object", () => {
    const payload = { data: { disabled: ["true", "false"] } };
    const expectedAction = {
      type: actions.SET_AGENCIES_FILTER,
      payload
    };

    expect(actionsCreators.setAgenciesFilter(payload)).to.deep.equal(expectedAction);
  });
});
