import { ActionTypes as types } from 'constants/index';

export function changeMenu() {
  return {
    type: types.CHANGE_MENU
  };
}

export function getMock2() {
  return {
    type: types.REQUEST_DEMO.REQUEST
  };
}

export function getMock3() {
  return {
    type: types.REQUEST_DEMO3.REQUEST
  };
}
