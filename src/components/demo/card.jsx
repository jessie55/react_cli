/*
 * DEMO
 */

import React, { Component } from 'react';

import _ from 'lodash';

import FontIcon from '../fontIcon';
import MyCard from '../card';

import './demo.scss';


class Card extends Component {
  static defaultProps = {
    className: 'layout',
    cols: {
      lg: 12, md: 10, sm: 6, xs: 4, xxs: 2
    },
    rowHeight: 200,
    onLayoutChange: () => { }
  };

  constructor() {
    super();

    this.state = {
      items: [0, 1, 2, 3, 4].map((i, key, list) => (
        {
          i: i.toString(),
          x: i * 2,
          y: 0,
          w: 2,
          h: 2,
          add: i === (list.length - 1).toString()
        }
      )),
      newCounter: 0
    };
  }

  componentWillMount = () => {
    this.props = {
      className: 'layout',
      cols: {
        lg: 12, md: 10, sm: 6, xs: 4, xxs: 2
      },
      rowHeight: 200,
      onLayoutChange: () => { }
    };
  }

  onAddItem = () => {
    this.setState({
      items: this.state.items.concat({
        i: `n${this.state.newCounter}`,
        x: (this.state.items.length * 2) % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2
      }),
      newCounter: this.state.newCounter + 1
    });
  }

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange = cols => {
    this.setState({
      cols
    });
  }

  onRemoveItem = i => {
    this.setState({ items: _.reject(this.state.items, { i: i }) });
  }

  onLayoutChange = layout => {
    this.props.onLayoutChange(layout);
  }

  createElement = el => {
    const removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer'
    };
    const i = el.add ? '+' : el.i;
    return (
      <div key={i} data-grid={el}>
        <div className="dy-card-head" />
        { el.add ? (
          <span
            className="add text"
            onClick={this.onAddItem}
            title="You can add an item by clicking here, too."
          >
            Add +
          </span>
        ) : (
          <span className="text">{i}</span>
        )}
        <span
          className="remove"
          style={removeStyle}
          onClick={() => { this.onRemoveItem(i); }}
        >
          x
        </span>
      </div>
    );
  }

  render() {
    return (
      <div>
        <span className="addBtn" onClick={this.onAddItem} >
          <FontIcon
            className="fa-flag"
          />
          ADD ITEM
        </span>
        <MyCard
          draggableHandle=".dy-card-head"
          // onLayoutChange={(layout) => { console.log(layout); }}
        >
          <div key="1">
            <h1>title1</h1>
            <p>11111111</p>
          </div>
          <div>
            <h1>title2</h1>
            <p>2222222</p>
          </div>
          <div>
            <h1>title3</h1>
            <p>3333333</p>
          </div>
        </MyCard>
        {/* <ResponsiveReactGridLayout
          onLayoutChange={this.onLayoutChange}
          onBreakpointChange={this.onBreakpointChange}
          draggableHandle=".dy-card-head"
          {...this.props}
        >
          {_.map(this.state.items, el => this.createElement(el))}
        </ResponsiveReactGridLayout> */}
      </div>
    );
  }

}

Card.defaultProps = {
  className: 'layout',
  cols: {
    lg: 12, md: 10, sm: 6, xs: 4, xxs: 2
  },
  rowHeight: 100,
  onLayoutChange: () => { }
};

export default Card;
