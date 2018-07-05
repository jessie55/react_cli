/*
 * DEMO
 */

import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import FontIcon from 'components/fontIcon';
import CardGrid from 'components/card';
import { getDashboards, getContents, setLastDashboard, updateLayouts } from 'actions/index';
import './dashboard.scss';

import * as data from './data';


class Card extends Component {

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

  getCurrentDashKey = () => {
    let key = this.props.match.params.key;
    const { lastDashboard = '', dashboards } = this.props.dashboard;
    key = !key ? (!lastDashboard ? dashboards[0].key || '' : lastDashboard) : key;
    return key;
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

  render() {
    const { dashboards, currentCards, lastDashboard } = this.props.dashboard;

    if (dashboards.length === 0 || currentCards.length === 0) {
      return (
        <div>空空，空空</div>
      );
    }
    const { dashboardList, cards } = this.formatData(dashboards, currentCards);
    const layouts = dashboardList[lastDashboard].layouts;

    return (
      <div>
        <span className="addBtn">
          <FontIcon className="fa-flag" />
          add
        </span>
        <div>
          {
            dashboards.map((item) => (
              <div
                key={item.key}
                onClick={() => { this.props.history.replace(`/dashboard/${item.key}`); }}
              >
                {item.name}
              </div>
            ))
          }
        </div>
        <CardGrid
          cards={cards}
          layouts={layouts}
          onLayoutChange={this.onLayoutChange}
          // onDeleteCard={this.onDeleteCard}
          // onUpdateCardConfig={this.onUpdateCardConfig}
          // dashboardCard={dashboardCard}
        />
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
    updateLayouts
  })
);
export default enhance(Card);
