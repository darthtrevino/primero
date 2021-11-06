import { fromJS } from "immutable";

export const DEFAULT_STATE = fromJS({
  connectivity: {
    online: true,
    serverOnline: true
  }
});
