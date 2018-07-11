const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  const res = {};
  const types = [REQUEST, SUCCESS, FAILURE];
  types.forEach(type => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const REQUEST_DEMO = createRequestTypes('REQUEST_DEMO');
export const REQUEST_DEMO3 = createRequestTypes('REQUEST_DEMO3');
export const CHANGE_MENU = 'CHANGE_MENU';

export const GET_DASHBOARDS = 'GET_DASHBOARDS';
export const GET_CONTENTS = 'GET_CONTENTS';
export const SET_LAST_DASHBOARD = 'SET_LAST_DASHBOARD';
export const UPDATE_LAYOUTS = 'UPDATE_LAYOUTS';
export const CREATE_DASHBOARD = 'CREATE_DASHBOARD';

