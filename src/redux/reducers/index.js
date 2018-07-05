import { combineReducers } from 'redux';
import demoReducer from './demoReducer';
import dashboardReducer from './dashboardReducer';

const rootReducer = combineReducers({
  demo: demoReducer,
  dashboard: dashboardReducer
});

export default rootReducer;
