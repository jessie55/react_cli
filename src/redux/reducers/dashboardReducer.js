import { ActionTypes as types } from '../constants';

const initialState = {
  lastDashboard: '',
  dashboards: [],
  currentCards: []
};

const demo = (state = initialState, action) => {
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
      return Object.assign({}, state, {
        data: 1
      });
    default:
      return state;
  }
};

export default demo;
