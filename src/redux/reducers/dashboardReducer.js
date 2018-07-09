import clone from 'clone';
import { ActionTypes as types } from '../constants';

const initialState = {
  lastDashboard: '',
  dashboards: [],
  currentCards: []
};

const demo = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case types.GET_DASHBOARDS:
      return Object.assign({}, state, {
        dashboards: action.payload,
        lastDashboard: !state.lastDashboard ? action.payload[0].key : state.lastDashboard
      });
    case types.GET_CONTENTS:
      return Object.assign({}, state, {
        currentCards: action.payload
      });
    case types.SET_LAST_DASHBOARD:
      return Object.assign({}, state, {
        lastDashboard: action.payload
      });
    case types.UPDATE_LAYOUTS:
      newState = clone(state);
      return newState;
    case types.CREATE_DASHBOARD:
      newState = clone(state);
      newState.dashboards.push(action.payload);
      return newState;
    default:
      return state;
  }
};

export default demo;
