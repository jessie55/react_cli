/*
 * card inner element
 *
 * @props
 *
 */

import React from 'react';
import { asyncComponent } from 'helpers/asyncComponent';
import configs from 'cards/mapping';
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
    const { type } = this.props;
    const InnerComponent = asyncComponent(() => import(`cards/${type}`));
    this.setState({
      InnerComponent
    });
  }


  render() {
    const { type } = this.props;
    const cardInfo = configs[type].cardInfo;
    const { name = cardInfo.name } = this.props;

    const { InnerComponent } = this.state;

    return (
      <div className="cardWrapper">
        <div className="grid-card-top">
          <CardHead
            title={name}
            type={type}
          />
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
