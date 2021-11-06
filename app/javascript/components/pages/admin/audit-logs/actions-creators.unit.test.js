import { RECORD_PATH } from "../../../../config";

import actions from "./actions";
import * as actionsCreators from "./action-creators";

import { expectObjectHasProperties } from "~test";

describe("<AuditLogs /> - pages/admin/audit-logs/action-creators", () => {
  it("should have known action creators", () => {
    expectObjectHasProperties(actionsCreators, ["fetchAuditLogs", "fetchPerformedBy", "setAuditLogsFilters"]);
  });

  it("should check that 'fetchAuditLogs' action creator returns the correct object", () => {
    const expected = {
      type: actions.FETCH_AUDIT_LOGS,
      api: {
        params: {},
        path: RECORD_PATH.audit_logs
      }
    };

    expect(actionsCreators.fetchAuditLogs({ options: {} })).to.deep.equal(expected);
  });

  it("should check that 'fetchPerformedBy' action creator returns the correct object", () => {
    const expected = {
      type: actions.FETCH_PERFORMED_BY,
      api: {
        params: {
          per: 999
        },
        path: RECORD_PATH.users
      }
    };

    expect(actionsCreators.fetchPerformedBy()).to.deep.equal(expected);
  });

  it("should check that 'setAuditLogsFilters' action creator returns the correct object", () => {
    const payload = {
      user_name: "test"
    };

    const expected = {
      type: actions.SET_AUDIT_LOGS_FILTER,
      payload
    };

    expect(actionsCreators.setAuditLogsFilters(payload)).to.deep.equal(expected);
  });
});
