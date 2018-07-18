/*
 * DEMO
 */

import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Input, Modal } from 'antd';
import uuid from 'uuid/v4';
import CardGrid from 'components/card';
import { getDashboards, getContents, setLastDashboard, updateLayouts, createDashboard } from 'actions/index';
import cardsList from 'cards/mapping';
import './dashboard.scss';
import * as data from './data';

class Card extends Component {
  state = {
    dashModalVisible: false,
    cardModalVisible: false,
    dashboardName: '',
    selectedCards: {}
  }

  componentDidMount = () => {
    const key = this.props.match.params.key || '';
    this.props.setLastDashboard(key);
    this.props.getDashboards(data.dashboards);
    this.props.getContents(data.contents);
  }

  onLayoutChange = (layout, allLayouts) => {
    console.log(allLayouts);
    // this.props.updateLayouts();
  }

  // 设置公共筛选框
  setFilters = cards => {
    let filterList = [];
    cards.map(item => {
      filterList = filterList.concat(cardsList[item.type].filters || []);
    });

    console.log(filterList);
    console.log(this.duplicates(filterList, 'param'));
  }

  // 提取公共筛选项
  //   duplicates = (arr, key) => {
  //     const reset = arr.map(a => a[key]).reduce((o, k, i) => [o[k] = i, o][1], {});

  //     console.log(11111);
  //     console.log(reset);

  // Object.keys(reset).map(k => {
  //     // 此处的 k 就是刚才 { a值: 最后一次在 arr 中出现的位置 } 里的 a 值
  //     // 构造一个新的 object
  //     let o = {a: k};
  //     // reset[k] 就是取出 k 所对应的 a 值最后一次在 arr 中出现的位置
  //     // arr[reset[k]] 就是 k 所对应的 a 值最后一次在 arr 中出现时所处的对象
  //     // 对 arr[reset[k]] 遍历一次键
  //     Object.keys(arr[reset[k]])
  //           // 把 arr[reset[k]] 上的键值挨个复制到 o 上
  //           // Ps. 突然发现刚才没有在遍历时跳过 a 的值，此处修改一下，原答案里就不改了。
  //         .forEach(key => o[key] = key === 'a' ? o[key] : arr[reset[k]][key]);
  //     // 返回构造好的新对象
  //     return o;
  // })
  //   }

  updateState = (key, val) => {
    this.setState({
      [key]: val
    });
  }

  createDashboard = () => {
    const key = uuid();
    const name = this.state.dashboardName;
    this.props.createDashboard({
      key,
      name,
      layouts: {
        lg: []
      }
    });
  }

  selectCard = item => {
    const type = item.componentType;
    const { selectedCards } = this.state;
    if (selectedCards[type]) {
      delete selectedCards[type];
    } else {
      selectedCards[type] = true;
    }
    this.setState({
      selectedCards
    });
  }

  createCard = (dashboardListObj) => {
    const { selectedCards } = this.state;
    const { lastDashboard, dashboards } = this.props.dashboard;
    const currentIndex = dashboardListObj[lastDashboard].idx;
    const currentLayout = dashboards[currentIndex].layouts.lg;

    for (const key in selectedCards) {
      console.log(key);

      const cid = uuid();
      currentLayout.push({
        i: cid,
        minW: 1,
        minH: 1,
        moved: false,
        static: false,
        w: 1,
        h: 1,
        x: 0,
        y: Infinity
      });
    }
  }

  dashModalOk = () => {
    this.createDashboard();
    this.setState({
      dashModalVisible: false,
      dashboardName: ''
    });
  }

  dashModalCancel = () => {
    this.setState({
      dashModalVisible: false,
      dashboardName: ''
    });
  }

  cardModalOk = (dashboardListObj, cardsObj) => {
    this.createCard(dashboardListObj, cardsObj);
    // this.setState({
    //   cardModalVisible: false
    // });
  }

  cardModalCancel = () => {
    this.setState({
      cardModalVisible: false
    });
  }

  // array => key-val对
  formatData = (dashboards, currentCards) => {
    const dashboardList = {};
    const cards = {};
    for (let i = 0; i < dashboards.length; i++) {
      const item = {
        idx: i,
        ...dashboards[i]
      };
      const key = item.key;
      dashboardList[key] = item;
    }
    for (let j = 0; j < currentCards.length; j++) {
      const item = {
        idx: j,
        ...currentCards[j]
      };
      const cid = item.cid;
      cards[cid] = item;
    }
    return {
      dashboardList,
      cards
    };
  }

  switchDashboard = key => {
    this.props.setLastDashboard(key);
    this.props.history.replace(`/dashboard/${key}`);
  }

  renderCardsList = () => {
    const list = [];
    for (const key in cardsList) {
      const item = cardsList[key];
      list.push(
        <Button
          key={item.componentType}
          className={!this.state.selectedCards[item.componentType] ? '' : 'cur'}
          onClick={() => { this.selectCard(item); }}
        >
          {item.name}
        </Button>
      );
    }
    return list;
  }


  render() {
    const { dashboards, currentCards, lastDashboard } = this.props.dashboard;

    if (dashboards.length === 0 || currentCards.length === 0) {
      return (
        <div>空空，空空</div>
      );
    }


    const { dashboardList, cards } = this.formatData(dashboards, currentCards);
    const layouts = dashboardList[lastDashboard] ? dashboardList[lastDashboard].layouts : null;
    this.setFilters(currentCards);

    return (
      <div>
        <ul className="btnBar">
          {
            dashboards.map((item) => (
              <li
                key={item.key}
                className={lastDashboard === item.key ? 'active' : ''}
                onClick={() => { this.switchDashboard(item.key); }}
              >
                {item.name}
              </li>
            ))
          }
          <li onClick={() => { this.updateState('dashModalVisible', true); }} />
        </ul>
        <div
          className="addCardBtn"
          onClick={() => { this.updateState('cardModalVisible', true); }}
        />
        {
          layouts ? (
            <CardGrid
              version={lastDashboard}
              cards={cards}
              layouts={layouts}
              onLayoutChange={this.onLayoutChange}
              // onDeleteCard={this.onDeleteCard}
              // onUpdateCardConfig={this.onUpdateCardConfig}
              // dashboardCard={dashboardCard}
            />
          ) : <div>空空，空空</div>
        }
        {/* 添加面板 */}
        <Modal
          title="创建看板"
          visible={this.state.dashModalVisible}
          className="createDashboardModal"
          onOk={this.dashModalOk}
          onCancel={this.dashModalCancel}
        >
          <div>
            看板名称：
            <Input
              className="dashboardName"
              placeholder="看板名称"
              value={this.state.dashboardName}
              onChange={e => { this.updateState('dashboardName', e.target.value); }}
            />
          </div>
        </Modal>

        {/* 添加卡片 */}
        <Modal
          title="添加卡片"
          visible={this.state.cardModalVisible}
          className="createCardModal"
          onOk={() => { this.cardModalOk(dashboardList, cards); }}
          onCancel={this.cardModalCancel}
        >
          <div>
            { this.renderCardsList() }
          </div>
        </Modal>
      </div>
    );
  }
}

const enhance = compose(
  connect(state => ({
    dashboard: state.dashboard
  }), {
    getDashboards,
    getContents,
    setLastDashboard,
    updateLayouts,
    createDashboard
  })
);
export default enhance(Card);
