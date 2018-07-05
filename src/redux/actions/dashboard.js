import { ActionTypes as types } from 'constants/index';

export function getDashboards(data) {
  return {
    type: types.GET_DASHBOARDS,
    payload: data
  };
}

export function getContents(data) {
  return {
    type: types.GET_CONTENTS,
    payload: data
  };
}

export function setLastDashboard(data) {
  return {
    type: types.SET_LAST_DASHBOARD,
    payload: data
  };
}


export function updateLayouts() {
  return {
    type: types.UPDATE_LAYOUTS
  };
}
