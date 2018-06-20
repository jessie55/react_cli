import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
const configureStore = (preloadedState, sagaMiddleware, env = null) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(env === 'production' ? applyMiddleware(sagaMiddleware) : applyMiddleware(sagaMiddleware, createLogger())),
  );
  return store;
};

export default configureStore;
