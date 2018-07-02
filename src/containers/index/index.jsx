/*
 * DEMO
 */

import React, { Component } from 'react';

import FontIcon from 'components/fontIcon';
import CardGrid from 'components/card';
// import data from './data.json';

import './index.scss';

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
    const layouts = {
      lg: [{
        w: 2,
        h: 2,
        x: 0,
        y: 0,
        i: 'key1',
        minW: 1,
        minH: 1,
        moved: false,
        static: false
      }, {
        w: 1,
        h: 1,
        x: 2,
        y: 0,
        i: 'key2',
        minW: 1,
        minH: 1,
        moved: false,
        static: false
      }]
    };
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
