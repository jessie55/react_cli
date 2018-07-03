/*
 * card inner element
 *
 * @props
 *
 */

import React from 'react';
import { asyncComponent } from 'helpers/asyncComponent';
import CardHead from './cardHead';

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
    const { title } = this.props;
    const { InnerComponent } = this.state;

    return (
      <div className="cardWrapper">
        <div className="grid-card-top">
          <CardHead title={title} />
        </div>
        <div className="grid-card-body">
          {InnerComponent ? (
            <InnerComponent />
          ) : null}
        </div>
      </div>
    );
  }
}

export default CardItem;
