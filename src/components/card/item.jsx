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
import { asyncComponent } from 'helpers/asyncComponent';
import './card.scss';


class CardItem extends React.Component {

  constructor() {
    super();
    this.state = {
      // isLoaded: false,
      InnerComponent: null
    };
  }

  componentDidMount = () => {
    const { componentName } = this.props;
    const InnerComponent = asyncComponent(() => import(`../${componentName}`));
    this.setState({
      InnerComponent
    });
  }

  render() {
    const { InnerComponent } = this.state;
    return (
      <div>
        {InnerComponent ? (
          <InnerComponent />
        ) : null}
      </div>
    );
  }
}

export default CardItem;
