import React from 'react';
export const asyncComponent = loadComponent => (
  class AsyncComponent extends React.Component {
    state = {
      Component: null
    }

    componentWillMount = () => {
      if (this.hasLoadedComponent()) {
        return;
      }
      loadComponent()
        .then(module => module.default)
        .then((Component) => {
          this.setState({ Component });
        })
        .catch((err) => {
          throw err;
        });
    }

    hasLoadedComponent = () => (
      this.state.Component !== null
    )

    render() {
      const { Component } = this.state;
      return (Component) ? <Component {...this.props} /> : null;
    }
  }
);
