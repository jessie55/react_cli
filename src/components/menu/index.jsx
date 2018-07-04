import React from 'react';
import { Menu, Icon } from 'antd';

import * as componentRouters from 'routers/routers';

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

  renderList = () => {
    const list = [];
    for (const key in componentRouters) {
      const item = componentRouters[key][0];
      list.push(
        <Menu.Item key={item.path}>
          <Icon type="appstore" />
          {key}
        </Menu.Item>
      );
    }
    return list;
  }
  render() {
    const menuList = this.renderList();
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        {menuList}
      </Menu>
    );
  }
}

export default App;
