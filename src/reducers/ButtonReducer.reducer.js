import { ACTION_CONSTANT } from '../actions/ActionTypes';

const initialState = [];
export default function (state = initialState, action) {
  const { type } = action;
  const reducer = {
    [ACTION_CONSTANT]: { ...state, action },
  };
  return reducer[type] || state;
}
