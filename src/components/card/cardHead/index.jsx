import React from 'react';

class CardHeader extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { title } = this.props;
    return (
      <div className="dy-card-head">
        <p>{title}</p>
      </div>
    );
  }
}

export default CardHeader;
