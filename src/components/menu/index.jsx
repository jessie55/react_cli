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
          <Icon type="appstore" />
          Index
        </Menu.Item>
        <Menu.Item key="/dashboard">
          <Icon type="appstore" />
          Dashboard
        </Menu.Item>
        <Menu.Item key="/mock">
          <Icon type="appstore" />
          Mock
        </Menu.Item>
      </Menu>
    );
  }
}

export default App;
