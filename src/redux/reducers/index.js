import { combineReducers } from 'redux';
import demoReducer from './demoReducer';
import dashboardReducer from './dashboardReducer';
import industrySpreadChartReducer from './industrySpreadChartReducer';

const rootReducer = combineReducers({
  demo: demoReducer,
  dashboard: dashboardReducer,
  industrySpreadChart: industrySpreadChartReducer
});

export default rootReducer;
