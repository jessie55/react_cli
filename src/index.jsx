import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import RootRouter from './routers/RootRouter';
import store from './redux/store';

// require('babel-core/register')
// require('babel-polyfill')

const hotRender = NextRouter => {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Provider store={store}>
        <HashRouter>
          <NextRouter />
        </HashRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('appContainer')
  );
};

hotRender(RootRouter);

if (module.hot) {
  module.hot.accept('./routers/RootRouter.jsx', () => {
    const nextRouter = require('./routers/RootRouter.jsx').default;
    hotRender(nextRouter);
  });
}
