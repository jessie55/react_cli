import React from 'react';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      current: '/'
    };
  }

  handleClick = e => {
    this.setState({
      current: e.key
    });
    this.props.history.push(`${e.key}`);
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="/">
          <Icon type="mail" />Navigation One
        </Menu.Item>
        <Menu.Item key="/mock">
          <Icon type="appstore" />Navigation Two
        </Menu.Item>
      </Menu>
    );
  }
}

export default App;
