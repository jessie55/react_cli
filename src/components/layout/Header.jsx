/*
 * 页头
 * 功能：
 *   1. 判断全局登陆态
 *   2. 显示头像 用户名
 *   3. 退出登录
 *
 */
import React from 'react';
import './layout.scss';

const Header = props => {
  const { title } = props;
  return (
    <div className="header">
      {title}
    </div>
  );
};

export default Header;
