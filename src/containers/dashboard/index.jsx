/*
 * DEMO
 */

import React, { Component } from 'react';

import FontIcon from 'components/fontIcon';
import CardGrid from 'components/card';
import * as data from './data';
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
    const { layouts, contents } = data;
    const cards = this.formatData(contents);

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
