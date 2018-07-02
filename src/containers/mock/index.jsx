/*
 * DEMO
 */

import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { changeMenu } from 'actions/index';

class Mock extends React.Component {

  handleClick = () => {
    this.props.changeMenu();
  }

  render() {
    return (
      <div>
        <span onClick={this.handleClick}>mock</span>
      </div>
    );
  }

}


const enhance = compose(
  connect(state => ({
    demo: state.demo
  }), {
    changeMenu
  })
);
export default enhance(Mock);
