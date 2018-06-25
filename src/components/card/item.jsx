/*
 * card inner element
 *
 * @props
 *   grid = {
 *     i              string
 *     x              number
 *     y              number
 *     w              number
 *     h              number
 *     minW           number
 *     maxW           number
 *     minH           number
 *     maxH           number
 *     isDraggable    boolean
 *     isResizable    boolean
 *     static         boolean    如果true, 相当于`isDraggable: false, isResizable: false`
 *   }
 */

import React from 'react';
import './card.scss';


class CardItem extends React.Component {
  static defaultProps = {
    minW: 10,
    minH: 10,
    isDraggable: true,
    isResizable: true,
    static: false
  }

  componentWillMount = () => {
  }

  render() {
    return (
      <div
        key={this.props.index}
        data-grid={this.props.grid}
      >
        <div className="dy-card-head" />
        {this.props.children}
      </div>
    );
  }
}

export default CardItem;
