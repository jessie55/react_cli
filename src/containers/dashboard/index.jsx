/*
 * DEMO
 */

import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Input, Modal } from 'antd';
import uuid from 'uuid/v4';
import CardGrid from 'components/card';
import { getDashboards, getContents, setLastDashboard, updateLayouts, createDashboard } from 'actions/index';
import './dashboard.scss';
import * as data from './data';

class Card extends Component {
  state = {
    visible: false,
    dashboardName: ''
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

  setDashboardName = val => {
    this.setState({
      dashboardName: val
    });
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  }

  handleOk = () => {
    this.createDashboard();
    this.setState({
      visible: false,
      dashboardName: ''
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
      dashboardName: ''
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

  createDashboard = () => {
    const key = uuid();
    const name = this.state.dashboardName;
    this.props.createDashboard({
      key,
      name
    });
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
          <li onClick={this.showModal} />
        </ul>
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


        <Modal
          title="创建看板"
          visible={this.state.visible}
          className="createDashboardModal"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>
            看板名称：
            <Input
              className="dashboardName"
              placeholder="看板名称"
              value={this.state.dashboardName}
              onChange={e => { this.setDashboardName(e.target.value); }}
            />
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
