/*
 * DEMO
 */

import React, { Component } from 'react';

import FontIcon from 'components/fontIcon';
import CardGrid from 'components/card';
import data from './data.json';

import './dashboard.scss';

class Card extends Component {

  formatData = cards => {
    const newObj = {};
    for (let i = 0; i < cards.length; i++) {
      const item = cards[i];
      const cid = item.cid;
      newObj[cid] = item;
    }
    return newObj;
  }

  render() {
    const layouts = data;
    const components = [{
      title: 'DEMO',
      cid: 'key1',
      componentName: 'table'
    }, {
      title: 'DEMO',
      cid: 'key2',
      componentName: 'table'
    }];

    const cards = this.formatData(components);

    return (
      <div>
        <span className="addBtn">
          <FontIcon
            className="fa-flag"
          />
          ADD ITEM
        </span>
        <CardGrid
          cards={cards}
          layouts={layouts}
          onLayoutChange={layout => { console.log('current layout', layout); }}
          // onDeleteCard={this.onDeleteCard}
          // onUpdateCardConfig={this.onUpdateCardConfig}
          // dashboardCard={dashboardCard}
        />
      </div>
    );
  }

}

export default Card;
