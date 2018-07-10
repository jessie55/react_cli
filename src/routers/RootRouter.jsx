import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, Switch, withRouter } from 'react-router';
import { asyncComponent } from 'helpers/asyncComponent';
import Menu from 'components/menu';
import * as componentRouters from './routers';

const rootPath = '';
const routes = [];

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
  initRoute = () => {
    for (const key in componentRouters) {
      componentRouters[key].map(item => {
        routes.push({
          path: `${rootPath}${item.path}`,
          exact: item.exact,
          component: asyncComponent(() => item.component)
        });
      });
    }
  }

  render() {
    this.initRoute();
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
