import throttle from 'lodash/throttle';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import configStore from './configStore';
import initialStore from './initialStore';

const sagaMiddleware = createSagaMiddleware();
export const store = configStore(initialStore, sagaMiddleware, process.env.NODE_ENV);

// 监听store变化
store.subscribe(throttle(() => {

}, 1000));

let sagaTask = sagaMiddleware.run(rootSaga);

if (module.hot) {
  module.hot.accept('../reducers/', () => {
    store.replaceReducer(require('../reducers/').default);
  });
  module.hot.accept('../sagas/', () => {
    const getNewSagas = require('../sagas/').default;
    sagaTask.cancel();
    sagaTask.done.then(() => {
      sagaTask = sagaMiddleware.run(getNewSagas);
    });
  });
}

export default store;
