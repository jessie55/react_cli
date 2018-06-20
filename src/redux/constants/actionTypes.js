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
export const CHANGE_MENU = 'CHANGE_MENU';
