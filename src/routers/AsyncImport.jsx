import React from 'react';
// import CircularProgress from './ProgressCircular'

const asyncImport = importComponent => {
  class asyncComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component
      });
    }

    render() {
      const C = this.state.component;
      // return C ? <C {...this.props} /> : <CircularProgress size={50}/>
      return C ? <C {...this.props} /> : null;
    }
  }

  return asyncComponent;
};

export default asyncImport;
