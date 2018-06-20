import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, Switch, withRouter, Redirect } from 'react-router';

// import asyncImport from './AsyncImport'
// import * as componentRouters from './routers'

// import Header from '../components/layout/Header'
// import Footer from '../components/layout/Footer'

import Menu from '../components/menu';
import Card from '../components/demo/card';
import Mock from '../components/demo/mock';

const routes = [
  {
    path: '/',
    exact: true,
    component: Card
  },
  {
    path: '/mock',
    exact: true,
    component: Mock
  }
];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => (
      <route.component {...props} dispatch={route.dispatch} />
    )}
  />
);

class RootRouter extends React.Component {

  render() {
    // const userInfo = this.props.userInfo
    // !userInfo.jwt ? null : this.initRoute()
    return (
      <Fragment>
        <Menu
          history={this.props.history}
          dispatch={this.props.dispatch}
        />
        <Switch>
          {
            routes.map((route, index) => (
              <RouteWithSubRoutes
                key={`route-${index}`}
                classes={this.props.classes || ''}
                {...route}
              />
            ))
          }
          <Redirect to="/mock" />
          {/* {
            !userInfo ? <Redirect to={`${prefix}/login`}/> : null
          } */}
        </Switch>
      </Fragment>
    );
  }
}

const enhance = compose(
  withRouter,
  connect(state => ({
    userInfo: state.userInfo
  }))
);
export default enhance(RootRouter);
