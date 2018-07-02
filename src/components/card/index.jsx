/*
 * card 拖动，缩放
 *
 * @props ./config/cardGrid
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import CardItem from './item';
import * as gridConfig from './config/cardGrid';
import './card.scss';

const findOrGenerateResponsiveLayout = Responsive.utils.findOrGenerateResponsiveLayout;
const ResponsiveGridLayout = WidthProvider(Responsive);
const GridItem = styled.div`
  background: rgba(255, 255, 255, 0.4);
`;

class CardGrid extends React.Component {
  static defaultProps = Object.assign({}, gridConfig)
  constructor(props) {
    super();
    const { breakpoints = { lg: 1200 }, layouts } = props;
    const currentLayout = findOrGenerateResponsiveLayout(layouts, breakpoints);

    this.state = {
      currentLayout,
      layouts,
      breakpoints
    };
  }

  onLayoutChange = (currentLayout, allLayouts) => {
    if (typeof this.props.onLayoutChange === 'function') {
      this.props.onLayoutChange(currentLayout, allLayouts);
    }
    this.setState({ currentLayout });
  };

  render() {
    const {
      cards,
      autoLoad,
      draggableHandle,
      draggableCancel,
      ...rest
    } = this.props;
    const { breakpoints, layouts, currentLayout } = this.state;

    // layouts必须要有lg的配置
    if (!layouts.lg) {
      return null;
    }

    return (
      <ResponsiveGridLayout
        {...rest}
        layouts={layouts}
        breakpoints={breakpoints}
        onLayoutChange={this.onLayoutChange}
        useCSSTransforms={false}
      >
        {
          currentLayout.map(({ i }) => {
            const card = cards[i];

            if (card) {
              const { cid = i, className = '' } = card;
              return (
                <GridItem key={cid} className={className}>
                  <CardItem
                    {...card}
                    cid={cid}
                  />
                </GridItem>
              );
            }
            return (
              <GridItem key={i} />
            );
          })
        }
      </ResponsiveGridLayout>
    );
  }
}

CardGrid.propTypes = {
  margin: PropTypes.array,
  containerPadding: PropTypes.array,
  isDraggable: PropTypes.bool,
  isResizable: PropTypes.bool,

  cards: PropTypes.object,
  layouts: PropTypes.object,
  onLayoutChange: PropTypes.func,
  breakpoints: PropTypes.object,
  onDeleteCard: PropTypes.func,
  onUpdateCardConfig: PropTypes.func,
  lazyLoad: PropTypes.bool,
  autoLoad: PropTypes.number,
  className: PropTypes.string,
  propsFromPage: PropTypes.object,
  rowHeight: PropTypes.number,
  draggableHandle: PropTypes.string,
  draggableCancel: PropTypes.string
};

export default CardGrid;

