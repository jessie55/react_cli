/*
 * DEMO
 */

import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Divider } from 'antd';

import { changeMenu, getMock2, getMock3 } from 'actions/index';

class Mock extends React.Component {

  handleClick = () => {
    this.props.changeMenu();
  }

  handleClick2 = () => {
    this.props.getMock2();
  }

  handleClick3 = () => {
    this.props.getMock3();
  }

  render() {
    return (
      <div style={{ padding: 10 }}>
        <Button type="primary" onClick={this.handleClick}>no-saga</Button>
        <Divider type="vertical" />
        <Button type="primary" onClick={this.handleClick2}>saga fetch-mock </Button>
        <Divider type="vertical" />
        <Button type="primary" onClick={this.handleClick3}>saga fetch-mock-fail backend-api</Button>
      </div>
    );
  }

}


const enhance = compose(
  connect(state => ({
    demo: state.demo
  }), {
    changeMenu,
    getMock2,
    getMock3
  })
);
export default enhance(Mock);
