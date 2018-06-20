import { ActionTypes as types } from '../constants';

const initialState = {
  data: 0
};

const demo = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_MENU:
      return Object.assign({}, state, {
        data: 1
      });
    default:
      return state;
  }
};

export default demo;
