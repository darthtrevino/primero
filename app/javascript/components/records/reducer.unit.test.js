import chai, { expect } from "chai";
import { Map, List, fromJS } from "immutable";
import chaiImmutable from "chai-immutable";

import reducer from "./reducer";

chai.use(chaiImmutable);

describe("<RecordList /> - Reducers", () => {
  const nsReducer = reducer("TestRecordType");

  it("should handle RECORDS_STARTED", () => {
    const expected = Map({ loading: true, errors: false });
    const action = {
      type: "TestRecordType/RECORDS_STARTED",
      payload: true
    };
    const newState = nsReducer(Map({}), action);

    expect(newState).to.deep.equal(expected);
  });

  it("should handle RECORDS_FAILURE", () => {
    const expected = Map({ errors: true });
    const action = {
      type: "TestRecordType/RECORDS_FAILURE",
      payload: ["some error"]
    };
    const newState = nsReducer(Map({}), action);

    expect(newState).to.deep.equal(expected);
  });

  it("should handle RECORDS_SUCCESS", () => {
    const expected = fromJS({
      data: [{ id: 3 }],
      metadata: { per: 2 }
    });

    const action = {
      type: "TestRecordType/RECORDS_SUCCESS",
      payload: { data: [{ id: 3 }], metadata: { per: 2 } }
    };

    const newState = nsReducer(Map({ data: List([]) }), action);

    expect(newState).to.deep.equal(expected);
  });

  it("should handle RECORDS_FINISHED", () => {
    const expected = Map({ loading: false });
    const action = {
      type: "TestRecordType/RECORDS_FINISHED",
      payload: false
    };
    const newState = nsReducer(Map({}), action);

    expect(newState).to.deep.equal(expected);
  });

  it("should handle SAVE_RECORD_STARTED", () => {
    const expected = fromJS({ saving: true });
    const defaultState = fromJS({});

    const action = {
      type: "TestRecordType/SAVE_RECORD_STARTED",
      payload: true
    };

    const newState = nsReducer(defaultState, action);

    expect(newState).to.deep.equal(expected);
  });

  it("should handle SAVE_RECORD_FINISHED", () => {
    const expected = fromJS({ saving: false });
    const defaultState = fromJS({});

    const action = {
      type: "TestRecordType/SAVE_RECORD_FINISHED",
      payload: false
    };

    const newState = nsReducer(defaultState, action);

    expect(newState).to.deep.equal(expected);
  });

  it("should handle SAVE_RECORD_FAILURE", () => {
    const expected = fromJS({ saving: false });
    const defaultState = fromJS({});

    const action = {
      type: "TestRecordType/SAVE_RECORD_FAILURE",
      payload: false
    };

    const newState = nsReducer(defaultState, action);

    expect(newState).to.deep.equal(expected);
  });
});
